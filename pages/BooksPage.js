import { BasePage } from "./BasePage.js";

export class BooksPage extends BasePage {

  // ADD YOUR LOCATORS HERE...

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.bookCategoriesDropDown = page.locator("//select[@id='book_categories']");
  
    
  }

}
