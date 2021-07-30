# Todoist-Frontend
This is a front-end automation project. In this repo, you'll find automation of the Todoist application using the TestCafe framework

## Dependencies

- NPM 6.14.13
- NODE 14.17.3
- TestCafe 6.14.13

# How work with this project
In order to work properly with this project, you need to start the TestCafe configuration:

1. Clone the repo using your local 
2. Using your console fins and open the project and start the TestCafe configuration

## How se TestCafe

Use the official documentation - [TestCafe](https://testcafe.io/documentation/402635/getting-started#installing-testcafe)

- Install TestCafe `npm install testcafe`

## Running first script: 
Once you have installed testcafe in the folder, try to run the next command into your terminal: 

1. PATH: `./yourProject` 
2. Command  `npm run test-smoke` 

The command above will be running the test-smoke of the project.

If everyting is fine you can proceed to run the diff scripts

## Scripts

1. Running all the tests: `npm run test`
2. Running a smoke test: `npm run test-smoke` 
3. Running only the projects feature: `npm run test-projects`
4. Running only the tasks feature: `npm run test-task`
5. Running only the login feature: `npm run test-task`

## Using Allure Report
The repo includes the Allure report - [Allure Documentation](https://www.npmjs.com/package/testcafe-reporter-allure)

1. Install the allure report into the root of your proyect
2. Use this command to create the report `allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report` 

