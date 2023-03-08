<p align="center">
  <img alt="Playwright" src="https://ewig5qf9cgn.exactdn.com/wp-content/uploads/2022/08/Playwright_logo_long-768x155.png">
</p>

## What is playwright-test ?

<b>playwright-test</b> is a project that served as a technical test for a job interview.

I used Playwright framework to do the challenge, which consists in a E2E test that enter in a web page and sign in it.

## Building and installation

We need to install Node 18.14.2 (see [www.nodejs.org](https://nodejs.org/) for more information).

Once Node installed, just follow the next steps:

```sh
# Install Playwright and dependencies
npm install

# Run the test
npx playwright test register.spec.ts

#Once was finished you can see the report
npx playwright show-report
```

## Updating Playwright

I also leave some instructions to update Playwright to the latest version

```sh
# Check current version
npx @playwright/test --version

# Update to latest version
npm install @playwright/test@latest

# Check again current version
npx @playwright/test --version

# Download the new browsers
npx playwright install
```