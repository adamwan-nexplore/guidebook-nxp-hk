# Smoke Tests

## What is it?

A QUICK, SIMPLE and most critical test cases to verify the system is working properly

## [Playwright](https://playwright.dev "https://playwright.dev")

A test framework that can simulate how we interact with browsers automatically

## Playwright - what it offers

- provide nodejs runtime
- be fast to start
- can run in parallel
- auto-wait until components are ready
- support test execution recording & screen capture
- support test recording

## Test Workflow

```mermaid
flowchart TB
  start([Start])
  finish([Finish])

  merge_to_branch[Merge to Branch]
  test_cases[Test Cases]
  code_quality_check[Code Quality Check]

  build_image[Build image]
  deploy_to_cluster[Deploy to Cluster]
  trigger_smoke_test[Trigger Smoke Tests]
  web_application[Web Application]
  smoke_test[Smoke Tests]


  start --> merge_to_branch --> test_cases & code_quality_check --> build_image --> deploy_to_cluster --> trigger_smoke_test --> finish

  deploy_to_cluster -.UPDATE.-> web_application
  trigger_smoke_test -. TRIGGER .-> smoke_test
  smoke_test ==> web_application

```

## How do we execute the smoke tests?

- Go to all the pages user will see and see if we can load the content without errors
- Go through the typical flows and see if the functions are working properly

## Tips to write test cases

- Most locators are `contains`. If you check the exact value, use `exact: true`

  ```typescript
  page.getByRole("heading", { name: "Company" }); // Heading with text `Company`
  page.getByRole("heading", { name: "Company", exact: true }); // Heading with EXACT text `Company`
  ```

  - To see the details of locator, check [here](https://playwright.dev/docs/api/class-locator "https://playwright.dev/docs/api/class-locator")

- Determine when to use `async matchers` and `generic matchers`

- Consider soft assertions

  ```typescript
  // Make a few checks that will not stop the test when failed...
  await expect.soft(page.getByTestId("status")).toHaveText("Success");

  // ... and continue the test to check more things.
  await page.getByRole("link", { name: "next page" }).click();
  ```

- Apply `tag` appropriately. It can make the test time shorter by running the subset of the test suites

  ```typescript
  npx playwright test --grep "@fast|@slow"
  npx playwright test --grep "(?=.*@fast)(?=.*@slow)"
  ```

- Please check [Playwright Best Practices](https://playwright.dev/docs/best-practices "https://playwright.dev/docs/best-practices") for more information

## Be avoid to run same action to run for each test

Sometime we only want to run some actions once through the test execution. e.g. Authentication

### Use Case: Authentication

1. Update auth as a new `project` in `playwright.config.ts`

   ```typescript
   import { defineConfig, devices } from "@playwright/test";

   export default defineConfig({
     projects: [
       // Step 1: Setup project
       { name: "setup", testMatch: /.*\.setup\.ts/ },

       {
         name: "chromium",
         use: {
           ...devices["Desktop Chrome"],
           // Step 2: Specify where to store the auth information
           storageState: "playwright/.auth/user.json",
         },
         dependencies: ["setup"],
       },
     ],
   });
   ```

2. Add `login.setup.ts`

   ```typescript
   import { test as setup } from "@playwright/test";
   import { getConfiguration } from "../configs/getConfiguration";

   const { CORE_FRONTEND_ENDPOINT } = getConfiguration();
   const AUTH_FILE = "playwright/.auth/user.json";

   setup("Login", async ({ page }) => {
     await page.goto(CORE_FRONTEND_ENDPOINT);
     await page.getByPlaceholder("Email").fill(process.env.USER_EMAIL);
     await page.getByPlaceholder("Password").fill(process.env.USER_PASSWORD);
     await page.getByRole("button", { name: "Log In" }).click();

     await page.context().storageState({ path: AUTH_FILE });
   });
   ```

3. Exclude the auth session file in git

   ```bash
   mkdir -p playwright/.auth
   echo $'\nplaywright/.auth' >> .gitignore
   ```

Extract from: [https://playwright.dev/docs/auth](https://playwright.dev/docs/auth "https://playwright.dev/docs/auth")

## How other people do the smoke tests

- [VS Code](https://github.com/microsoft/vscode/wiki/Smoke-Test "https://github.com/microsoft/vscode/wiki/Smoke-Test")

## Reference

- [MS Playwright Tutorial](https://learn.microsoft.com/en-us/training/modules/build-with-playwright "https://learn.microsoft.com/en-us/training/modules/build-with-playwright")
- [Playwright Youtube Channel](https://www.youtube.com/@Playwrightdev "https://www.youtube.com/@Playwrightdev")
- [Smoke Tests](<"https://en.wikipedia.org/wiki/Smoke_testing_(software)">)
