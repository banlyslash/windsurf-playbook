# Windsurf Documentation

This website is built using [Docusaurus](https://docusaurus.io/) and contains comprehensive documentation for Windsurf features. The content is sourced from the `windsurf-features` directory in the Windsurf Playbook repository.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### GitHub Pages

To deploy to GitHub Pages:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

Or using SSH:

```bash
USE_SSH=true yarn deploy
```

### Netlify

To deploy to Netlify:

1. Create a new site on Netlify
2. Connect to your GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `build`

### Vercel

To deploy to Vercel:

1. Import your repository on Vercel
2. Set the framework preset to "Docusaurus"
3. Deploy

## Content Management

The documentation content is sourced from markdown files in the `docs` directory. To update the documentation:

1. Edit the markdown files in the `docs` directory
2. The sidebar navigation is configured in `sidebars.ts`
3. Site configuration is in `docusaurus.config.ts`

## Contributing

We welcome contributions to the Windsurf Playbook! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
