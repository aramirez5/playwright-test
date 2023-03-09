<p align="center">
  <img alt="Playwright" src="https://ewig5qf9cgn.exactdn.com/wp-content/uploads/2022/08/Playwright_logo_long-768x155.png">
</p>

## What is playwright-test ?

<b>playwright-test</b> is a project that contains tests made with the Playwright framework

At this moment I have three tests:

1. A test for a job interview which consists in enter in a web page and sign in it.
2. A test that login and assert some elements
3. A test in an Android device

## Building and installation

We need to install Node 18.14.2 (see [www.nodejs.org](https://nodejs.org/) for more information).

Once Node installed, just follow the next steps:

```sh
# Install Playwright and dependencies
npm install

# Run the a single test...
npx playwright test register.spec.ts

# ...or run all the a tests (android test will fail if your mobile is not connected)
npx playwright test

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

## Android test

In the current version of Playwright (1.31.2), the Android automation is <b>experimental</b> which means that maybe you will not be able to run the test correctly.

See [playwright.dev/docs/api/class-android](https://playwright.dev/docs/api/class-android) for more information and the requirements you have to follow.

