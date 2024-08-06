# Troubleshooting Guide

This guide addresses common issues you might encounter while setting up, developing, or running the Harpie insurance comparison system.

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Development Server Problems](#development-server-problems)
3. [Build Errors](#build-errors)
4. [Testing Issues](#testing-issues)
5. [API Connection Problems](#api-connection-problems)
6. [Performance Issues](#performance-issues)
7. [Styling Problems](#styling-problems)

## Installation Issues

### Error: Unable to find a suitable version for angular

**Solution:** Ensure you're using the correct version of Node.js (v14 or later). Then, try clearing your yarn cache and reinstalling:

```bash
yarn cache clean
yarn install
```

### Error: gyp ERR! build error

**Solution:** This is often due to missing build tools. On Windows, install the Windows Build Tools:

```bash
npm install --global windows-build-tools
```


## Development Server Problems

### Error: Port 4200 is already in use

**Solution:** Kill the process using the port and restart the server:

```bash
kill $(lsof -t -i:4200)
yarn start
```

### Changes not reflecting in the browser

**Solution:** Try hard refreshing your browser (Ctrl + F5 on Windows, Cmd + Shift + R on macOS). If the issue persists, restart the development server.

## Build Errors

### Error: Cannot find module '@angular/compiler-cli'

**Solution:** This can occur if the Angular CLI is not installed globally. Install it with:

```bash
yarn global add @angular/cli
```

Then, reinstall project dependencies:

```bash
yarn install
```

## Testing Issues

### Karma fails to start

**Solution:** Ensure you have Chrome installed (Karma's default browser). If you prefer a different browser, update the `karma.conf.js` file.

### E2E tests failing unexpectedly

**Solution:** Make sure you have the latest WebDriver for your browser. For Chrome:

```bash
yarn webdriver-manager update
```

## API Connection Problems

### CORS errors in the console

**Solution:** Ensure the API server is configured to allow requests from your development server's origin. If you're running the API locally, check that it's running and accessible.

### 404 errors when calling API endpoints

**Solution:** Verify that the API base URL in the application configuration matches your API server's address. Check `src/environments/environment.ts` for development settings.

## Performance Issues

### Application running slowly

**Solution:** 
1. Use Angular's production mode: `ng serve --prod`
2. Ensure you're not making excessive API calls or subscriptions.
3. Implement lazy loading for modules if not already done.

## Styling Problems

### Styles not applying as expected

**Solution:** 
1. Check that your component's styles are properly encapsulated (using `ViewEncapsulation.Emulated` or appropriate shadow DOM settings).
2. Ensure global styles are imported in the correct order in `styles.css`.
3. Verify that custom CSS is not being overridden by more specific selectors.

---

If you encounter an issue not covered in this guide, please [open an issue](https://github.com/FRITZON/harpie_frontend/issues/new) on our GitHub repository with a detailed description of the problem and steps to reproduce it.
