let vers = (version).version

let book_exists = ('book' | path exists)
if $book_exists == false {
  print (error make {
    msg: "please run this script from the root of the website repo",
  })
  exit --now
}

# Old commands are currently not deleted because some of them
# are platform-specific (currently `exec`, `registry query`), and a single run of this script will not regenerate
# all of them.
#do -i { rm book/commands/*.md }

let commands = ($nu.scope.commands | where is_custom == false and is_extern == false | sort-by category)
let cmds_group = ($commands | group-by name)
let uniq_cmds = ($cmds_group | columns)

$uniq_cmds | each { |cname|
  let safe_name = ($cname| str replace '\?' '' | str replace ' ' '_')
  let doc_path = (['.', 'book', 'commands', $'($safe_name).md'] | path join)
  let cmd_list = ($cmds_group | get $cname)
  let indented_usage = ($cmd_list | get usage | each {|it| $"  ($it)"} | str join (char nl))
  let category_matter = ($cmd_list | get category | each { |cat|
  let usage = ($cmd_list | where category == $cat | get usage | str join (char nl))
  $'($cat | str snake-case): |
  ($usage)'
  } | str join (char nl))
  let category_list = "  " + ($cmd_list | get category | str join "\n  " )

  # this is going in the frontmatter as a multiline YAML string, so indentation matters
  let top = $"---
title: ($cname)
categories: |
($category_list)
version: ($vers)
($category_matter)
usage: |
($indented_usage)
---
"
  let doc = ($cmds_group | get $cname | each { |command| get-doc $command } | str join)
  [$top $doc] | str join | save --raw --force $doc_path
  $doc_path
} | length | $"($in) commands written"

def get-doc [command] {
  let top = $"
# <code>{{ $frontmatter.title }}</code> for ($command.category)

<div class='command-title'>{{ $frontmatter.($command.category | str snake-case) }}</div>

"

  let param_type = ['switch', 'named', 'rest', 'positional']
  let columns = ($command.signatures | columns)
  let no_sig = ($command | get signatures | is-empty)
  let no_param = if $no_sig { true } else {
    $command.signatures | get $columns.0 | where parameter_type in $param_type | is-empty
  }
  let sig = if $no_sig { '' } else {
    ($command.signatures | get $columns.0 | each { |param|
      if $param.parameter_type == "positional" {
        $"('(')($param.parameter_name)(')')"
      } else if $param.parameter_type == "switch" {
        $"--($param.parameter_name)"
      } else if $param.parameter_type == "named" {
        $"--($param.parameter_name)"
      } else if $param.parameter_type == "rest" {
        $"...rest"
      }
    } | str join " ")
  }

  let signatures = $"## Signature(char nl)(char nl)```> ($command.name) ($sig)```(char nl)(char nl)"

  let params = if $no_param { '' } else {
    ($command.signatures | get $columns.0 | each { |param|
      if $param.parameter_type == "positional" {
        $" -  `($param.parameter_name)`: ($param.description)"
      } else if $param.parameter_type == "switch" {
        $" -  `--($param.parameter_name)`: ($param.description)"
      } else if $param.parameter_type == "named" {
        $" -  `--($param.parameter_name) {($param.syntax_shape)}`: ($param.description)"
      } else if $param.parameter_type == "rest" {
        $" -  `...rest`: ($param.description)"
      }
    } | str join (char nl))
  }

  let parameters = if $no_param { "" } else { $"## Parameters(char nl)(char nl)($params)(char nl)(char nl)" }

  let ex = $command.extra_usage
  # Certain commands' extra_usage is wrapped in code block markup to prevent their code from
  # being interpreted as markdown. This is strictly hard-coded for now.
  let extra_usage = if $ex == "" { "" } else if $command.name in ['def-env' 'export def-env' 'as-date' 'as-datetime' ansi] {
    $"## Notes(char nl)```text(char nl)($ex)(char nl)```(char nl)"
  } else {
    $"## Notes(char nl)($ex)(char nl)"
  }

  let examples = if ($command.examples | length) > 0 {
    let example_top = $"## Examples(char nl)(char nl)"

    let $examples = ($command.examples | each { |example|
$"($example.description)
```shell
> ($example.example)
```

"
    } | str join)

    $example_top + $examples
  } else { "" }

  let doc = (
    ($top + $signatures + $parameters + $extra_usage + $examples ) |
    lines |
    each {|it| ($it | str trim -r) } |
    str join (char nl)
  )
  $doc
}
