@lib-01
Feature: Login to the application
  As a user, I want to login so that I can access the app's main features.

  #* AC1: users should be able to log in with valid credentials and launch to the homepage.
  #* AC2: users should see a "Sorry, Wrong Email or Password" error pop-up message if any users try to log in with invalid credentials.
  #* AC3: users should see a “This field is required.” error pop-up message when they attempt to log in without any credentials.


  Background:
    Given user is already on the login page

  @lib-01-01
  Scenario Outline: Verify users can login with valid credentials
    When user enters valid username '<user-type>'
    And user enters valid password '<user-type>'
    And user clicks the login button
    Then user login succussfully to the homepage
    Examples:
      | user-type |
      | admin     |
      | student    |


  @lib-01-02
  # TODO: Verify users can not login with invalid credentials
  Scenario Outline: Verify users can not login with invalid credentials
    When user enter invalid username "<invalid-username>"
    And user enter invalid password "<invalid-password>"
    And user clicks the login button
    Then user should see a "Sorry, Wrong Email or Password" error pop-up
    Examples:
      | invalid-username | invalid-password |
      | library@student  | password123      |
      | library@cydeo    | libraryPassword  |


  @lib-01-03
  # TODO: Verify users are not allowed to login without any credentials
  Scenario: Verify users are not allowed to login without any credentials
    When user clicks the login button
    Then user should see a "This field is required." error pop-up


#? Should there be more scenarios for this user story? Feel free to add more scenarios.


