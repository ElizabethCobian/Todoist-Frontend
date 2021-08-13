import basePage from '../pages/BasePage'
import todayPage from '../pages/TodayPage'
import upcomingPage from '../pages/UpcomingPage'
import { URLS, TASKS, TIMEOUTS } from '../data/Constants'
import { STANDAR_USER } from '../data/Roles'

fixture('Creating Taks')
  .page(URLS.LOGIN_URL)
  // BeforeEach: Confirming I'm doing login with the correct user and I'm on the expected page
  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((basePage.todayTitle).exists).ok({ timeout: TIMEOUTS.ASSERTION_TIMEOUT })
    await basePage.deleteAllTasks()
  })
  .afterEach(async t => {
    await t.wait(TIMEOUTS.WAIT_TIMEOUT)
  })

// Test-happypath: Creating just one task and validating if was successfully created
test('As a user, I should be able to create a new taks for Today', async t => {
  await todayPage.createNewTaskToday(TASKS.TASK_TITLES.TITLE)
  await t.expect((basePage.taskCreated).exists).ok()
})

// Test-happypath: Creating just one task for tomorrow due date
test('As a user, I should be able to create a new task for Tomorrow', async t => {
  await basePage.upcomingSection()
  await basePage.deleteAllTasks()
  await upcomingPage.newTaskTomorrow(TASKS.TASK_TITLES.TITLE)
  await upcomingPage.openTask()
  await t.expect((upcomingPage.tomorrowLabel).exists).ok()
})

// Test-happypath: Adding and validating the creation of multiple tasks
test('Adding multiple task ', async t => {
  await todayPage.addNewTasks(TASKS.TASK_TITLES.TITLE, TASKS.TASK_NUMBER.MINIMO_NUMBER)
  await t.expect(await todayPage.validateMultipleTasks(TASKS.TASK_TITLES.TITLE, TASKS.TASK_NUMBER.MINIMO_NUMBER)).ok()
})
