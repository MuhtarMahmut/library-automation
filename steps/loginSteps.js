import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
import { PageManager } from "../globalPagesSetup.js";


Given("user is already on the login page", async function () {
  //await pageManager.loginPage.page.goto(pageManager.loginPage.librarayUrl);
  PageManager.page.goto(PageManager.loginPage.librarayUrl);
  // await BrowserUtility.sleep(2);
});

When("user enters valid username {string}", async function (string) {
  if (("" + string).toLowerCase() === "admin") {
    await PageManager.loginPage.enterUsername(
      PageManager.loginPage.adminUsername
    );
  } else {
    await PageManager.loginPage.enterUsername();
  }
  // await BrowserUtility.sleep(2);
});

When("user enters valid password {string}", async function (string) {
  if (("" + string).toLowerCase() === "admin") {
    await PageManager.loginPage.enterPassword(
      PageManager.loginPage.adminPassword
    );
  } else {
    await PageManager.loginPage.enterPassword();
  }
  // await BrowserUtility.sleep(2);
});

When("user clicks the login button", async function () {
  await PageManager.loginPage.clickLoginButton();
  // await BrowserUtility.sleep(2);
});

Then("user login succussfully to the homepage", async function () {
  // verify the title is Library
  await expect(PageManager.page).toHaveTitle("Library");
  
  // await BrowserUtility.sleep(2);
});
