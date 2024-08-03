import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export class BasePage {
  
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.librarayUrl = process.env.LIBRARY_URL;
    this.studentUsername = process.env.LIBRARY_STUDENT_USERNAME;
    this.studentPassword = process.env.LIBRARY_STUDENT_PASSWORD;
    this.adminUsername = process.env.LIBRARY_ADMIN_USERNAME;
    this.adminPassword = process.env.LIBRARY_ADMIN_PASSWORD;
  }

}
