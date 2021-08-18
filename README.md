![wizeline logo2](https://user-images.githubusercontent.com/25800070/128397445-776489fa-09ab-4965-98f4-968cc4fcb427.jpeg)


# Todoist-Frontend
This is a front-end automation project. In this repo, you'll find automation of the Todoist application using the TestCafe framework

## Dependencies

- NPM 6.14.13
- NODE 14.17.3
- TestCafe 6.14.13

## Project Structure

```
├── ...
├── pom                 # Page Object Model
│   └── data            # Constants and Roles
│   └── pages           # Pages including Base and Common
│   └── tests           # All the tests (Only a fixture per file)
├── package.json
├── .env
├── confi files
└── ...
```

# Installation

## 1. Install Node.JS
Use the official documentation: [Node JS](https://nodejs.org/en/)

1. Install on your computer Node JS

## 2. NPM
Use the offical documentation: [NPM](https://docs.npmjs.com/getting-started)

2. Install on your computer NPM

## 3. ESlint framework 
Use the official documentation [Eslint](https://eslint.org/docs/user-guide/getting-started)

Eslint is a framework that help us to create pretty code

In addition, you'll need the TestCafe Plugin ESlint: [Plugin TestCafe Eslint](https://www.npmjs.com/package/eslint-plugin-testcafe)


# Installing the Project on your local
In order to work properly with this project, you need to start the TestCafe configuration:

1. Create a new folder on your computer
2. Clone the repo into the new folder 
4. Then start the TestCafe configuration

## TestCafe Configuration

Use the official documentation - [TestCafe](https://testcafe.io/documentation/402635/getting-started#installing-testcafe)

- Install TestCafe `npm install testcafe`

The command above will be installing TestCafe ONLY into the folder

## Dotenv 
Use the official documentation: [Dotenv](https://www.npmjs.com/package/dotenv)

```
BASE_URL=Todoist-Login-URL
SUCCESS_USER_EMAIL=your-email
SUCCESS_USER_PASSWORD=your-password
```

## Running first script: 
Once you have installed testcafe in the folder, try to run the next command into your terminal: 

1. PATH: `./yourProject` 
2. Command  `npm run test-smoke` 

The command above will be running the test-smoke of the project.

If everyting is fine you can proceed to run the diff scripts


# Scripts Availables

1. Running all the tests: `npm run test`
2. Running a smoke test: `npm run test-smoke` 
3. Running only the projects feature: `npm run test-projects`
4. Running only the tasks feature: `npm run test-task`
5. Running only the login feature: `npm run test-login`
6. Running only the ESlint script: `npm run lint`

# Using Allure Report
The repo includes the Allure report - [Allure Documentation](https://www.npmjs.com/package/testcafe-reporter-allure)

1. Install the allure report into the root of your proyect
2. Use this command to create the report `allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report` 

