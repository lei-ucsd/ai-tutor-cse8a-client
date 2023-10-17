# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Prerequisites
- Node >= 18
- Yarn 1.22.x

You can install yarn globally by running the following:
```
npm install --global yarn
```

### Installing Dependencies

```
$ yarn
```

### Local Development

#### Optional: Using a local server

Make a copy of `.env-sample` and rename it to `.env`. Configure the environment variables as instructed in the env template.

#### Starting local devlopment
If not using a local server, you could skip the step above, or simply set `LOCAL` to 0. Then, run the following:

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server (except changes to `.env`, which requires a full restart).

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

If you have write permission to the `main` branch of this repository, then _every_ commit you make will lead to an auto-deployment to `gh-pages` via GitHub Actions.

As such, it is recommended that you keep your work on separate branches and only open pull requests for merging the branches into `main` when the work is ready.

Note that it may take some time for changes to redeploy.
