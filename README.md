# Momence Homework

## Homework description
Create a simple React app (based on Create React App - https://facebook.github.io/create-react-app/) that:
1. After its launch, it downloads the current exchange rate ticket from the Czech National Bank website.
- API
- URL: https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt
Documentation: https://www.cnb.cz/cs/casto-kladene-dotazy/Kurzy-devizoveho-trhu-na-www-strankach-CNB/
2. It processes the downloaded data and displays it clearly to the user.
3. Connect a simple form where the user enters the amount in CZK and at the press of a button, the user is shown the conversion to the currency of his choice using the current exchange rate.
4. Commit the code continuously. Upload the result to GitHub or another repository.
5. Tech. stack - React (+ Hooks), TypeScript, Styled Components, React Query

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
The API design might seem strange, but it's inspired by NextUI which I have been using for a while and I really like the API design decisions they made.
