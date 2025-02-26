---
title: quantile
categories: |
  expression
  lazyframe
version: 0.74.0
expression: |
  Aggregates the columns to the selected quantile
lazyframe: |
  Aggregates the columns to the selected quantile
usage: |
  Aggregates the columns to the selected quantile
  Aggregates the columns to the selected quantile
---

# <code>{{ $frontmatter.title }}</code> for expression

<div class='command-title'>{{ $frontmatter.expression }}</div>

## Signature

```> quantile ```

## Examples

Quantile aggregation for a group-by
```shell
> [[a b]; [one 2] [one 4] [two 1]]
    | into df
    | group-by a
    | agg (col b | quantile 0.5)
```

# <code>{{ $frontmatter.title }}</code> for lazyframe

<div class='command-title'>{{ $frontmatter.lazyframe }}</div>

## Signature

```> quantile ```

## Examples

quantile value from columns in a dataframe
```shell
> [[a b]; [6 2] [1 4] [4 1]] | into df | quantile 0.5
```
