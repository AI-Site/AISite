<h1 align="center">
    <p align="center">Website</p>
</h1>

## Introduction


## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory.

## Deployment

The website is automatically deployed to the branch `gh-pages` on repository `runletapp.github.io` each time the `main` branch receives a new push. The GitHub Action workflow file is stored at `.github/workflows/deploy.yml.`
