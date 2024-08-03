# Library Automation Framework

This project is designed to automate the library management system using Playwright and Cucumber. Follow the steps below to set up the environment, work on the project, and manage it using Git.

## Table of Contents
1. [Prerequisites](#Prerequisites)
2. [Environment Setup](#environment-setup)
3. [Framework Structure and Usage](#framework-structure-and-usage)
4. [Project and Git Workflow](#project-and-git-workflow)<br>

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v18 or higher)
- npm (v6 or higher), which comes with Node.js
- Visual Studio Code
- Git
- Playwright Test
- cucumber (v10 or higher)
- dotenv (v16 or higher)

To install Playwright Test, cucumber, and dotenv, open your terminal and run:
```sh
npm install @playwright/test @cucumber/cucumber dotenv
```
<br>

## Environment Setup

### 1. Download the "library-automation" Project Zip Folder
1.1 Go to your LMS (CYDEO Learning APP)  
1.2 Navigate to the "JavaScript and Playwright" course on your LMS  
1.3 Expand the "Project Implementation" module  
1.4 Click the "library-automation" folder and download it

### 2. Unzip the Downloaded Folder
Unzip the downloaded folder and move it to your "VS Code Projects" folder.

### 3. Open the Folder in VS Code
3.1 Open the VS Code App  
3.2 Go to `File` and click `Open Folder`  
3.3 Select the "library-automation" folder under the VS Code Projects

### 4. Install VS Code Extensions
Install the following extensions for a better development experience:
- Better Comments
- Cucumber (Gherkin) Full Support
- Material Icon Theme
- NPM
- npm Intellisense
- NPM Run
- Playwright Snippets
- Tabnine

### 6. Create the .env File
Create a .env file at the project root level.<br>
This file will be used for storing credentials, and it's added to the git-ignore file.

### 7. Add Environment Variables to the .env File
7.1 Go to your LMS (CYDEO Learning APP).<br>
7.2 Navigate to the "JavaScript and Playwright" course on your LMS.<br>
7.3 Expand the "Project Implementation" module.<br>
7.4 Download the "Environment Variables" text file.<br>
7.5 Open the Environment Variables.txt file.<br>
7.6 Select all (Ctrl/Command + A) and copy (Ctrl/Command + C).<br>
7.7 Paste it into the .env file of the "library-automation" project.<br>

### 8. Run the "test:tag" Script
Go to the package.json file and run the "test:tag" script to verify the setup.<br>

## Framework Structure and Usage

### 1. The `features` folder
This folder is used for storing the feature files, each feature file has a unique tag name which can be used to run specific feature in `package.json` file

### 2. The `hooks` Folder
This folder contains the globalHooks for cucumber step definitions.<br> It also has the playwright utility for page & browser

### 3. The `pages` Folder
This folder is used for storing webelements of the pages.<br>
BasePage must be the parent class of all the page classes.<br>
Every single page class must be added and initialized in the `globalPagesSetup.js` to be able to locate elements of each pages by using same page fixture of playwright

### 4. The `steps` Folder
This folder is used for storing the step definitions of the features.<br>
The file names of the steps should match with its feature file's name.<br>

### 5. The `.env` file
A file to store and load the environment variables that are needed for this automation project.<br>
You will need to create this file in the project at project level, copy all the environment variables from the file that is provided to you on your LMS.

### 6. `cucumber.cjs` File
A CommonJS configuration file for CucumberJS, managing settings for BDD-style automated tests. It includes paths for step definitions, support files, plugins, and output formatting options, allowing customization of test execution.

### 7. `package.json` File
The `package.json` file for the "library-automation" project includes several key sections:

- **`name`**: Identifies the project as "library-automation".
- **`version`**: Marks the current version at "1.0.0".
- **`main`**: Points to the main entry file of the project, "index.js".
- **`scripts`**: Defines custom scripts for the project:
    - **`test`**: Runs CucumberJS tests.
    - **`test:tag`**: Executes CucumberJS tests filtered by the `@tagName` tag.
    - **`Mac-open:report`**: Opens the cucumber report HTML file on macOS.
    - **`Windows-open:report`**: Opens the cucumber report HTML file on Windows.
- **`dependencies`**: Lists project dependencies, including Cucumber, Playwright for testing, and dotenv for environment variable management.
- **`type`**: Specifies the module system, set to "module" for ES Module support.

This setup facilitates BDD-style testing with CucumberJS and Playwright, and includes cross-platform support for viewing test reports.<br>

## Project and Git Workflow

### 1. Upload the "library-automation" Project to GitHub
Create a new repository on GitHub and upload the project.
### 2. Create a "develop" Branch
Create a branch named develop in your GitHub repository.
### 3. Create Feature Branches
Create separate branches for each feature from the develop branch. Use the following naming convention for feature branches: feature/tagname_feature_name.
Example: If the tag name of login.feature is @lib-01, then the feature branch name should be feature/lib-01_login.
Note: You must create a unique feature branch for every feature file before you work on them.
### 4. Update the Project
Update your local repository:
```sh
git fetch
git pull
```

### 5. Checkout the Specific Feature Branch
Checkout the specific feature branch you need to work on:
```sh
git checkout feature/branch_name
```
Double-check the checked-out branch. The bottom left corner of VS Code shows the current branch.

### 6. Work on the Feature File
Work on the feature file of the branch you checked out.

### 7. Commit and Push Changes
After fully completing and testing the feature file, commit and push your changes with descriptive commit messages:
```sh
git add .
git commit -m "Descriptive commit message"
git push
```

Note: This will push to the remote feature branch.
### 8. Create a Pull Request
Create a pull request from your remote feature branch to the develop branch.
### 9. Repeat Steps
Repeat from step #3 until you finish all the user stories. By following these steps, you will be able to set up, work on, and manage your library automation project efficiently. Happy coding!<br>

## Authors
Muhtar - [Muhtar](https://github.com/MuhtarMahmut)