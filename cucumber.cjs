/**
 * This module exports an object containing configuration settings for Cucumber.js.
 * The default configuration is used when no specific configuration is provided.
 *
 * @module cucumberConfig
 */
module.exports = {
  default: {
    paths: ["./features/**/*.feature"],
    import: ["./steps/**/*.js", "./hooks/**/*.js"],
    format: ["progress-bar", "html:test-reports/cucumber-report.html"],
    formatOptions: { snippetInterface: "async-await" },
  },
};