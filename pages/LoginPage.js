import {BasePage} from "./BasePage.js";

export class LoginPage extends BasePage {
  
  // ADD YOUR LOCATORS HERE...
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.usernameInput = page.locator("//input[@id='inputEmail']");
    this.passwordInput = page.locator("//input[@id='inputPassword']");
    this.loginButton = page.locator(
      "//button[text()='Sign in' and @type='submit']"
    );
    
  }

  /**
   * Enters a username into the username input field.
   * If no username is provided, the function will use the student username.
   *
   * @param {string|null} username - The username to be entered. If null, the student username will be used.
   * @returns {Promise<void>} - A promise that resolves when the username is entered.
   */
  async enterUsername(username = null) {
    if (username == null) {
      await this.usernameInput.fill(this.studentUsername);
    } else {
      await this.usernameInput.fill(username);
    }
  }

  /**
   * Enters a password into the password input field.
   * If no password is provided, the function will use the student password.
   *
   * @param {string|null} password - The password to be entered. If null, the student password will be used.
   * @returns {Promise<void>} - A promise that resolves when the password is entered.
   */
  async enterPassword(password = null) {
    if (password == null) {
      await this.passwordInput.fill(this.studentPassword);
    } else {
      await this.passwordInput.fill(password);
    }
  }

  /**
   * Clicks the login button on the login page.
   *
   * @returns {Promise<void>} - A promise that resolves when the login button is clicked.
   */
  async clickLoginButton() {
    await this.loginButton.click();
  }
}
