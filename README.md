# Momence Homework

## Tech stack
- React with Typescript
- Vite (extremely fast bundler based on ESBuild (bundler made by exceptional developer, written in Go))
- Styled-components
- React-query

## Vite custom plugin
I wanted to simply parse the daily rates with [`@rollup/plugin-dsv`](https://github.com/rollup/plugins/tree/master/packages/dsv), however it does not allow to specify custom CSV delimiter,
so I made a custom plugin.

Sure, there's many ways to get the daily rates data (eg. react-query on every load), but using a static file has the advantage to cache the file to avoid unnecessary network traffic. But yes, it brings up a different issue, which is refreshing the file every day.

## Text
The API design might seem strange, but it's inspired by NextUI