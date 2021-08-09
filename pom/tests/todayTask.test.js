import appToday from '../pages/appToday'
import appUpcoming from '../pages/appUpcoming'
import { URLS, TASKS } from '../data/constants'
import { STANDAR_USER } from '../data/roles'

fixture('Creating Taks')
  .page(URLS.LOGIN_URL)
  // BeforeEach: Confirming I'm doing login with the correct user and I'm on the expected page
  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((appToday.todayTitle).exists).ok({ timeout: 10000 })
  })
  .afterEach(async t => {
    await appToday.deleteAllTasks()
    await t.wait(5000)
  })

// Test-happypath: Creating just one task and validating if was successfully created
test.only('As a user, I should be able to create a new taks for Today', async t => {
  await appToday.createNewTaskToday(TASKS.TASK_TITLES.TITLE)
  await t.expect((appToday.taskCreated).exists).ok()
})

// Test-happypath: Creating just one task for tomorrow due date
test('As a user, I should be able to create a new task for Tomorrow', async t => {
  await appToday.createNewTaskToday(TASKS.TASK_TITLES.TITLE)
  await appUpcoming.upcomingSection()
  await t.expect((appUpcoming.tomorrowTask).exists).ok()
})

// Test-happypath: Adding and validating the creation of multiple tasks
test.meta('type', 'smoke')('Adding multiple task ', async t => {
  await appToday.addNewTasks(TASKS.TASK_NUMBER.NUMBER)
  await t.expect(await appToday.validateTaskCreated(TASKS.TASK_NUMBER.NUMBER)).ok()
})
