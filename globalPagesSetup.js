import { LoginPage } from "./pages/LoginPage.js";
import { BooksPage } from "./pages/BooksPage.js";
import { BorrowingBooksPage } from "./pages/BorrowingBooksPage.js";
import { DashboardPage } from "./pages/DashboardPage.js";
import { UsersPage } from "./pages/UsersPage.js";
// Import OTHER CLASSES HERE...

/** @typedef {import('./pages/LoginPage.js').LoginPage} LoginPage */
/** @typedef {import('./pages/BooksPage.js').BooksPage} BooksPage */
/** @typedef {import('./pages/BorrowingBooksPage.js').BorrowingBooksPage} BorrowingBooksPage */
/** @typedef {import('./pages/DashboardPage.js').DashboardPage} DashboardPage */
/** @typedef {import('./pages/UsersPage.js').UsersPage} UsersPage */
// ADD YOUR OWN TYPEDEFS HERE...
export class PageManager {

  /** @type {import('playwright').Page} */
  static page;

  /** @type {LoginPage} */
  static loginPage;

  /** @type {BooksPage} */
  static booksPage;

  /** @type {BorrowingBooksPage} */
  static borrowingBooksPage;

  /** @type {DashboardPage} */
  static dashboardPage;

  /** @type {UsersPage} */
  static usersPage;
  // ADD YOUR OWN PAGE CLASSES & TYPES HERE...



  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    PageManager.page = page;
    PageManager.loginPage = new LoginPage(page);
    PageManager.booksPage = new BooksPage(page);
    PageManager.borrowingBooksPage = new BorrowingBooksPage(page);
    PageManager.dashboardPage = new DashboardPage(page);
    PageManager.usersPage = new UsersPage(page);
    // INITIALIZE PAGE INSTANCES HERE...


  }

}
