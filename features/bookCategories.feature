@lib-03
Feature: Book Categories

    As a user, I want to see 21 book categories, so I can filter my favorite books.

    #* AC1: users should see 21 book categories When users click the Book Categories drop down
    #*      ALL, Action and Adventure, Anthology, Classic, Comic and Graphic Novel, Crime and Detective, Drama
    #*      , Fable, Fairy Tale, Fan-Fiction, Fantasy, Historical Fiction, Horror, Science Fiction, Humor
    #*      , Biography/Autobiography ,Romance, Short Story, Essay, Memoir, Poetry


    # TODO: verify users see 21 book categories
    Scenario Outline: Verify that user sees 21 book categories for admin
        Given user is already on the login page
        And user is already logged in as "<user-type>"
        When user clicks Books link
        And user clicks the book categories drop down box
        Then user should see 21 book categories
        Examples:
            | user-type |
            | admin     |
            | student   |


    # TODO: Verify that all 21 book categories are displayed under the Book Categories drop down
    Scenario Outline: Verify that all 21 books are displayed in the same orders for both admin and student users
        Given user is already on the login page
        And user is already logged in as "<user-type>"
        When user clicks Books link
        And user clicks the book categories drop down box
        Then book category name "<category>" should be inlcuded in the categories
        Examples:
            | user-type | category                |
            | admin     | ALL                     |
            | admin     | Action and Adventure    |
            | admin     | Anthology               |
            | admin     | Classic                 |
            | admin     | Comic and Graphic Novel |
            | admin     | Crime and Detective     |
            | admin     | Drama                   |
            | admin     | Fable                   |
            | admin     | Fairy Tale              |
            | admin     | Fan-Fiction             |
            | admin     | Fantasy                 |
            | admin     | Historical Fiction      |
            | admin     | Horror                  |
            | admin     | Science Fiction         |
            | admin     | Humor                   |
            | admin     | Biography/Autobiography |
            | admin     | Romance                 |
            | admin     | Short Story             |
            | admin     | Essay                   |
            | admin     | Memoir                  |
            | admin     | Poetry                  |
            | student   | ALL                     |
            | student   | Action and Adventure    |
            | student   | Anthology               |
            | student   | Classic                 |
            | student   | Comic and Graphic Novel |
            | student   | Crime and Detective     |
            | student   | Drama                   |
            | student   | Fable                   |
            | student   | Fairy Tale              |
            | student   | Fan-Fiction             |
            | student   | Fantasy                 |
            | student   | Historical Fiction      |
            | student   | Horror                  |
            | student   | Science Fiction         |
            | student   | Humor                   |
            | student   | Biography/Autobiography |
            | student   | Romance                 |
            | student   | Short Story             |
            | student   | Essay                   |
            | student   | Memoir                  |
            | student   | Poetry                  |




#? Should there be more scenarios for this user story? Feel free to add more scenarios.