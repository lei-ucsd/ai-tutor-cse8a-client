# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Prerequisites
Node >= 18

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

If you have write permission to the `main` branch of this repository, then _every_ commit you make will lead to an auto-deployment to `gh-pages` via GitHub Actions.

As such, it is recommended that you keep your work on separate branches and only open pull requests for merging the branches into `main` when the work is ready.