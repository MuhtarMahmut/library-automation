import { Before, After, setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import {PageManager} from "../globalPagesSetup.js";

const BROWSER_TYPE = "chrome"; // Default browser type
const WIDTH = 1920; // Default screen width
const HEIGHT = 1080; // Default screen height
const DEFAULT_TIMEOUT = 30000; // default timeout in milliseconds

const browserSetup = {
  headless: false,
  //slowMo: 1000,
};

/**
 * Initializes the browser, context, and page for testing.
 */
Before(async function () {
  await this.init();
});

/**
 * Closes the browser and context after a test scenario.
 *
 * This function is intended to be used as an "After" hook in Cucumber tests.
 * It ensures that the browser and context are properly closed after each test scenario,
 * freeing up system resources and preventing memory leaks.
 */
After(async function () {
  await this.close();
});

// ------------------------Playwright Page & Browser Utility --------------------------

/**
 * CustomWorld class encapsulates the browser, context, and page setup for testing.
 * It provides methods for initializing and closing the testing environment.
 */
class CustomWorld {
  /**
   * Initializes a new browser instance based on the specified browser type.
   *
   * @remarks
   * This function creates a new browser instance using the provided browser type.
   * It supports Chrome, Chromium, Firefox, WebKit, and Safari.
   *
   * @param {string} BROWSER_TYPE - The type of browser to initialize.
   * @param {object} browserSetup - Additional configuration options for the browser.
   *
   * @returns {Promise<Browser>} - A promise that resolves to the initialized browser instance.
   *
   * @throws {Error} - If an unsupported browser type is provided.
   *
   * @example
   * ```typescript
   * const browser = await initializeBrowser("chrome", { headless: false });
   * ```
   */
  async initializeBrowser(){
    let browser;
    switch (BROWSER_TYPE.toLowerCase()) {
      case "chrome":
      case "chromium":
        browser = await chromium.launch({
          ...browserSetup,
          args: ["--start-maximized"], // Specific to Chromium-based browsers
        });
        break;
      case "firefox":
        browser = await firefox.launch(browserSetup);
        break;
      case "webkit":
      case "safari":
        browser = await webkit.launch(browserSetup);
        break;
      default:
        throw new Error(`Unsupported browser type: ${BROWSER_TYPE}`);
    }
    return browser;
  }

  /**
   * Initializes a new browser context for testing.
   *
   * This function creates a new browser context using the current browser instance.
   * The context is configured with a specific screen size and viewport settings.
   *
   * @returns {Promise<import("@playwright/test").BrowserContext>} - A promise that resolves to the new browser context.
   */
  async initializeContext(){
    const context = await this.browser.newContext({
      screen: { width: WIDTH, height: HEIGHT },
      viewport: null, // This disables the default viewport
    });
    return context;
  }

  /**
   * Initializes a new page for testing within the current browser context.
   *
   * This function creates a new page within the existing browser context.
   * The page is configured with a specific screen size, viewport settings, and default timeout.
   *
   * @remarks
   * The function sets the viewport size to the predefined width and height,
   * and sets the default timeout to the specified value.
   *
   * @returns {Promise<import("@playwright/test").Page>} - A promise that resolves to the new page.
   */
  async intializePage(){
    const page = await this.context.newPage();
    await page.setViewportSize({ width: WIDTH, height: HEIGHT });
    await page.setDefaultTimeout(DEFAULT_TIMEOUT);
    return page;
  }

  /**
   * Initializes the testing environment by creating a new browser instance, context, and page.
   *
   * This function orchestrates the creation of a new browser instance, context, and page for testing.
   * It also initializes the global page elements using the `initElements` function.
   *
   * If the specified browser type is not Chrome or Chromium, the viewport size is set to the predefined width and height.
   */
  async init() {
    this.browser = await this.initializeBrowser();
    this.context = await this.initializeContext();
    this.page = await this.intializePage();
    new PageManager(this.page);

    if (
      BROWSER_TYPE.toLowerCase() !== "chrome" &&
      BROWSER_TYPE.toLowerCase() !== "chromium"
    ) {
      await this.page.setViewportSize({ width: WIDTH, height: HEIGHT });
    }
  }

  /**
   * Closes the browser and context after a test scenario.
   *
   * This function is responsible for properly closing the browser and context instances
   * after a test scenario has been executed. It ensures that system resources are freed up
   * and prevents memory leaks.
   */
  async close() {
    await this.page.close();
    await this.browser.close();
  }
}

/**
 * Sets the custom world constructor for Cucumber tests.
 *
 * The `CustomWorld` class encapsulates the browser, context, and page setup for testing.
 * It provides methods for initializing and closing the testing environment.
 *
 * @param {CustomWorld} CustomWorld - The custom world constructor class.
 */
setWorldConstructor(CustomWorld);

/**
 * Sets the default timeout for Playwright operations.
 *
 * This function configures the default timeout for all Playwright operations, such as page navigation, waiting for elements, etc.
 * The default timeout is set to the value specified by the `DEFAULT_TIMEOUT` constant.
 *
 * @param {number} timeout - The default timeout in milliseconds.
 */
setDefaultTimeout(DEFAULT_TIMEOUT);
