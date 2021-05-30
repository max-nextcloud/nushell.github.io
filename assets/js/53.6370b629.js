(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{457:function(e,s,t){"use strict";t.r(s);var a=t(44),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Output ANSI codes to change color.")]),e._v(" "),t("p",[e._v("For escape sequences:\nEscape: "),t("code",[e._v("\\x1b[")]),e._v(" is not required for --escape parameter")]),e._v(" "),t("p",[e._v("Format: "),t("code",[e._v("#(;#)m")])]),e._v(" "),t("p",[e._v("Example: 1;31m for bold red or 2;37;41m for dimmed white fg with red bg\nThere can be multiple text formatting sequence numbers\nseparated by a ; and ending with an m where the # is of the\nfollowing values:")]),e._v(" "),t("p",[e._v("attributes")]),e._v(" "),t("ul",[t("li",[e._v("0    reset / normal display")]),e._v(" "),t("li",[e._v("1    bold or increased intensity")]),e._v(" "),t("li",[e._v("2    faint or decreased intensity")]),e._v(" "),t("li",[e._v("3    italic on (non-mono font)")]),e._v(" "),t("li",[e._v("4    underline on")]),e._v(" "),t("li",[e._v("5    slow blink on")]),e._v(" "),t("li",[e._v("6    fast blink on")]),e._v(" "),t("li",[e._v("7    reverse video on")]),e._v(" "),t("li",[e._v("8    nondisplayed (invisible) on")]),e._v(" "),t("li",[e._v("9    strike-through on")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    foreground/bright colors    background/bright colors\n    30/90    black              40/100    black\n    31/91    red                41/101    red\n    32/92    green              42/102    green\n    33/93    yellow             43/103    yellow\n    34/94    blue               44/104    blue\n    35/95    magenta            45/105    magenta\n    36/96    cyan               46/106    cyan\n    37/97    white              47/107    white\n    https://en.wikipedia.org/wiki/ANSI_escape_code\n")])])]),t("p",[e._v("OSC: "),t("code",[e._v("\\x1b]")]),e._v(" is not required for --osc parameter")]),e._v(" "),t("p",[e._v("Example: "),t("code",[e._v("echo [(ansi -o '0') 'some title' (char bel)] | str collect")])]),e._v(" "),t("p",[e._v("Format:")]),e._v(" "),t("ul",[t("li",[e._v("0 Set window title and icon name")]),e._v(" "),t("li",[e._v("1 Set icon name")]),e._v(" "),t("li",[e._v("2 Set window title")]),e._v(" "),t("li",[e._v("4 Set/read color palette")]),e._v(" "),t("li",[e._v("9 iTerm2 Grown notifications")]),e._v(" "),t("li",[e._v("10 Set foreground color (x11 color spec)")]),e._v(" "),t("li",[e._v("11 Set background color (x11 color spec)")]),e._v(" "),t("li",[e._v("... others")])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("subcommand"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" \n")])])]),t("h2",{attrs:{id:"subcommands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subcommands"}},[e._v("#")]),e._v(" Subcommands")]),e._v(" "),t("ul",[t("li",[e._v("ansi strip - strip ansi escape sequences from string")])]),e._v(" "),t("h2",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("(code)")]),e._v(" the name of the code to use like 'green' or 'reset' to reset the color")])]),e._v(" "),t("h2",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),t("ul",[t("li",[e._v("-h, --help: Display this help message")]),e._v(" "),t("li",[e._v("-e, --escape "),t("any",[e._v(": escape sequence without the escape character(s)")])],1),e._v(" "),t("li",[e._v("-o, --osc "),t("any",[e._v(": operating system command (ocs) escape sequence without the escape character(s)")])],1)]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Change color to green")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansi green\n")])])]),t("p",[e._v("Reset the color")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansi reset\n")])])]),t("p",[e._v("Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi rb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Hello "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi gb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Nu "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi pb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" World"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" str collect\n")])])]),t("p",[e._v("Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3;93;41m'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Hello "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi reset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi gb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Nu "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ansi pb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" World"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" str collect\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);