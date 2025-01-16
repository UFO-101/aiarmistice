# Claude Artifact Runner

## Table of Contents

- [Claude Artifact Runner](#claude-artifact-runner)
  - [Table of Contents](#table-of-contents)
  - [TL/DR](#tldr)
  - [Summary](#summary)
  - [Overview](#overview)
  - [Project scope](#project-scope)
  - [What's included?](#whats-included)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
  - [How to build your application](#how-to-build-your-application)
  - [Project structure](#project-structure)
  - [Customization](#customization)
    - [Removing unneeded components / libraries](#removing-unneeded-components--libraries)
      - [Unneeded Shadcn UI components](#unneeded-shadcn-ui-components)
      - [Unneeded packages (ex: Recharts)](#unneeded-packages-ex-recharts)
  - [Building for production](#building-for-production)
  - [Deploying your application](#deploying-your-application)
    - [Local test deployment](#local-test-deployment)
    - [Traditional web hosting](#traditional-web-hosting)
    - [Cloud hosting platforms](#cloud-hosting-platforms)
      - [Netlify](#netlify)
      - [Vercel](#vercel)
      - [GitHub Pages](#github-pages)
      - [Cloudflare Pages](#cloudflare-pages)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## TL/DR

1. You created a fancy web app using Claude's Artifacts feature.
2. You want to run it outside of Claude's website.
3. You found this project.

## Summary

If you're searching for a way to take the small web applications Claude generates with its Artifacts feature, and run them outside of its website, you've come to the right place.

This project provides a standalone environment that mimics the Artifacts runtime, enabling you to run, test, and further develop the code generated by Claude, independently from its website.

With it, you can create a complete web application, comprised of one or more pages, that can be deployed anywhere, whether locally for your own use, in a company intranet or in public-facing production environment, at the webhosting or cloud provider of your choice.

## Overview

If you've created a small web application or component using Claude's Artifacts feature and want to do any of the following:

1. run the Artifact on your local machine,
2. use the Artifact as a starting point for a new project,
3. integrate it into a larger project, or
4. assemble multiple Artifacts into a larger web application,

you'll be disappointed to find out that, if you copy the Artifact code or download it via the download button, you'll only receive a single file containing the main logic of the app, not the full project with all necessary files to run it on your computer.

> Note that the code loaded by your web browser to run the Artifact is not the same as the code you copy or download from the interface; it is a transpiled, minimized and bundled version that includes all the necessary libraries (e.g., React) required to run it.

If you're unfamiliar with the technologies used on the project, you'll have a hard time assembling and configuring all the required libraries and tooling required to make a running standalone app.

Even if you're an experienced developer, you may just want to save time and effort and get the Artifacts running as easily and as soon as possible.

This scaffold/boilerplate provides the fastest and easiest way to get your Artifacts up and running on your machine. It includes all the necessary dependencies and configurations to seamlessly transition your Claude-generated Artifacts into a fully functional web application in no time.

## Project scope

Claude's Artifacts run client-side only (i.e. in the browser). As such, they are limited in their capabilities.

If you need a full-stack application (with database, APIs, etc.), this is not the right project.

Nevertheless, this project provides a good starting point. You can still add a server-side framework like Express or Fastify to create a full-stack application.

Also note that this project is meant only for running Artifacts that are interactive web apps, usually made in React, and for which Claude writes Javascript or Typescript code.
**Mermaid diagrams, SVGs, and other document-type Artifacts are out of the project’s scope.**

## What's included?

These are the libraries and frameworks this project provides, identical to those available on Claude's Artifacts environment:

1. **React 18** for building user interfaces.
2. **TypeScript** to support Artifacts written in type-safe Javascript.
3. **Vite** for fast development and building.
4. **Shadcn UI** for pre-built, customizable components.
5. **Tailwind CSS** for compact and expressive embedded styling.
6. **Recharts** for creating dynamic, customizable charts and data visualizations.
7. **Lucide React** for a comprehensive library of open-source icons designed for React applications.

> Note that the actual versions of the packages currently in use in the Artifacts environment may differ from the ones installed by this project, as Anthropic may update them from time to time.  
> If a component generated by Claude fails to run properly because of an outdated package, please let me know.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
  minimum supported version is 16 (lts/gallium), tested up to version 23.2, version 22.11 is recommended
- npm (usually comes with Node.js)

## Getting started

1. Clone the repository:

   ```
   git clone https://github.com/claudio-silva/claude-artifact-runner.git
   cd claude-artifact-runner
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the default app running.

5. The default app is composed of two demo components: a login form and a signup form. You can navigate between them by clicking on the link at the bottom of the form.

These demo components are just for demonstration purposes and can be easily replaced with your own components, either generated by Claude or created by yourself, as this boilerplate provides a generic starting point for any kind of web app, with or without AI assisted generation.

## How to build your application

1. Remove the default components from the `src/artifacts/` directory.
2. Generate a React component using Claude on the Artifacts environment.
3. Copy the generated component code.
4. If this is the first component of your app, paste the code into a new file at `src/artifacts/default.tsx`. It will be the default page for the app and it will be accessible at `http://localhost:5173/`.
5. You may add additional Artifacts to the `src/artifacts/` directory, saving each one into a new file and giving it a unique name, such as `your-component.tsx`. Each component you add will be a new page accessible at `http://localhost:5173/your-component-name` (without the `.tsx` extension).
6. If you have `npm run dev` running in the background, the new pages will be ready to display immediately. If a page is already open when being updated, it will refresh automatically.
7. You can link Artifacts to each other to build a multi-page application.
   > **It's easy:** on each Artifact page, just add links that navigate to the other Artifacts, by specifying their names without the `.tsx` extension.  
   E.g. `<a href="my-component">Go to My Component</a>`
8. You can also use the `useNavigate` hook to navigate to a specific page.
9. Finally, to create a release build and publish your finished application, follow the instructions further below.

## Project structure

- `src/`: Contains the source code for the application
  - `artifacts/`: **The Artifacts generated by Claude should be placed here**
  - `components/`: Bundled Shadcn UI components
  - `lib/`: Utility functions and helpers
  - `App.tsx`: Main application component
  - `App.css`: Your custom styles should be placed here
  - `index.css`: Tailwind styles
- `public/`: Static assets
- `index.html`: Entry HTML file
- `vite.config.ts`: Vite configuration
- `tailwind.config.mjs`: Tailwind CSS configuration
- `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`: TypeScript configuration
- `package.json`: all the required packages are registered here.

## Customization

- Use `src/App.css` to add additional CSS styles.
- Place static assets (such as images) in the `public` folder.
- Modify `tailwind.config.mjs` to customize the Tailwind CSS theme.
- Update `App.tsx` to change the overall layout or add new features.
- Add or modify components in the `src/components/` directory.
  > **Note:** Shadcn UI components installed via `npx` are automatically placed in `src/components/ui`. All components come pre-installed by default, but if you remove some and later want to reinstall any, you may simply run `npx shadcn-ui@latest add <your-component>`.
  
### Removing unneeded components / libraries

The **Recharts** library and ALL **Shadcn UI** components come pre-installed, so that all code that Claude may generate will run *out-of-the-box*.

If you just want to run the Artifact locally, you may leave things as they are, but if you want to deploy the application or use it as a base for a larger project, you may want to optimize the application's bundle size.

To do that, you may remove the pre-installed components or libraries that are not required by your application.

#### Unneeded Shadcn UI components

  Just delete the component's files from `src/components/ui`.

#### Unneeded packages (ex: Recharts)

  Use `npm remove` to uninstall them.

## Building for production

To create a production build, run:

```
npm run build
```

This will generate optimized files in the `dist/` directory, ready for deployment.

## Deploying your application

After running `npm run build`, you'll have a `dist` folder containing the built files (typically an HTML file, a JavaScript file, and a CSS file).

Here are several ways to deploy these files:

### Local test deployment

For local testing of the production build, you can use the `serve` package:

1. Install `serve` globally:

   ```
   npm install -g serve
   ```

2. Navigate to your project directory and run:

   ```
   serve -s dist
   ```

3. Open a browser and go to `http://localhost:3000` (or the URL provided in the terminal).

### Traditional web hosting

If you want to deploy to a shared or dedicated web server:

1. Upload the contents of the `dist` folder to your web server's public HTML directory (often called `public_html`, `www`, or `htdocs`).

Remember to update any necessary configuration files (like `vite.config.ts`) before building your app if it is not being served from the root of your domain.

For example, for `vite.config.ts`, you may configure it like this:

```javascript
export default {
  base: '/subdirectory/', // Set this to the path your app is served from
  // other configurations
};
```

### Cloud hosting platforms

Here are some popular free cloud hosting platforms and how to deploy your app to them:

> Remember to run `npm run build` before deploying to ensure you're uploading the latest version of your app.

#### Netlify

1. Install the Netlify CLI:

   ```
   npm install -g netlify-cli
   ```

2. Run the following command in your project directory:

   ```
   netlify deploy
   ```

3. Follow the prompts. When asked for the publish directory, enter `dist`.

4. For production deployment, use:

   ```
   netlify deploy --prod
   ```

#### Vercel

1. Install the Vercel CLI:

   ```
   npm install -g vercel
   ```

2. Run the following command in your project directory:

   ```
   vercel
   ```

3. Follow the prompts. Vercel will automatically detect that it's a Vite project and use the correct settings.

#### GitHub Pages

1. If you haven't already, create a GitHub repository for your project.

2. Install the `gh-pages` package:

   ```
   npm install gh-pages --save-dev
   ```

3. Add these scripts to your `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Run:

   ```
   npm run deploy
   ```

5. **Important: Custom Domain Setup**
   - If using a custom domain:
     - Create a file named `CNAME` in your `public` directory containing just your domain name:

       ```plaintext:public/CNAME
       yourdomain.com
       ```

     - This file will be copied to the `dist` folder during build
     - This prevents your custom domain from being unset during deployments
     - This should set the custom domain property in the GitHub Pages settings

   - DNS Configuration:
     - Add a CNAME record at your domain registrar pointing to `<username>.github.io`
     - DNS changes can take up to 48 hours to propagate
     - During this time:
       - The site might initially work on HTTP but not HTTPS
       - GitHub will automatically provision an SSL certificate once DNS is properly configured
     - After DNS propagation and SSL setup are complete, both HTTP and HTTPS should work correctly

6. Make sure GitHub Pages is set up to use the `gh-pages` branch

#### Cloudflare Pages

You can deploy to Cloudflare Pages either through the Cloudflare dashboard or using the `wrangler` CLI tool. Here's how to do it using `wrangler`, which is often the most straightforward method:

1. **Install Wrangler:**

   ```
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**

   ```
   wrangler login
   ```

3. **Deploy your project:**

   ```
   wrangler pages deploy dist
   ```

   This command will prompt you to create a new project if one doesn't exist, and then deploy your `dist` folder to Cloudflare Pages.

4. **Configure your project (optional):**
   If you need more control over your deployment, you can create a `wrangler.toml` file in your project root:

   ```toml
   name = "my-react-app"
   compatibility_date = "2024-07-16" # Replace with the current date

   [site]
   bucket = "./dist"
   ```

   Note: The `account_id` and `workers_dev` fields are typically not needed for Cloudflare Pages deployments.

5. **Custom domain and production settings:**
   To use a custom domain or configure production settings, you can use the Cloudflare Pages dashboard. There, you can set up your domain, configure environment variables, and manage other deployment settings.

## Troubleshooting

If you encounter any issues, try the following:

1. Clear your browser cache and restart the development server.
2. Delete the `node_modules` folder and run `npm install` again.
3. Make sure your Node.js version is compatible with the project requirements.
4. Check for any error messages in the console and search for solutions online.

If problems persist, please open an issue on this project's GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

I found [Claude-React-Jumpstart](https://github.com/Bklieger/Claude-React-Jumpstart) when looking for a way to run Artifacts outside of [claude.ai](https://claude.ai).

However, it did not fully meet my needs, so I decided to make my own project, as I wanted something that:

- was completely pre-configured (no need to install or configure additional stuff),
- was ready to go with a single `npm install`, and
- included all components and libraries needed to fully replicate the Artifacts environment.

I would also like to thank [IntranetFactory](https://github.com/IntranetFactory) for contributing the routing solution for handling multiple Artifacts.