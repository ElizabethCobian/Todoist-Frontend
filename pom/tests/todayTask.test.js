/* eslint-disable no-undef */
import appToday from '../pages/appToday'
import appUpcoming from '../pages/appUpcoming'
import { URLS, MESSAGES, TASKS } from '../data/Constants'
import { STANDAR_USER } from '../data/Roles'

fixture('Creating Taks')
  .page(URLS.LOGIN_URL)
  // BeforeEach: Confirming I'm doing login with the correct user and I'm on the expected page
  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((appToday.todayTitle).exists).ok({ timeout: 10000 })
  })

// Test-happypath: Creating just one task and validating if was successfully created
test.meta('type', 'smoke')('As a user, I should be able to create a new taks for Today', async t => {
  await appToday.createNewTaskToday(MESSAGES.TASK.NEW_TAKS.TITLE, MESSAGES.TASK.NEW_TAKS.DESCRIPTION)
  await t.expect((appToday.taskCreated).exists).ok()
})

// Test-happypath: Creating just one task for tomorrow due date
test('As a user, I should be able to create a new task for Tomorrow', async t => {
  await appToday.createNewTaskTomorrow(MESSAGES.TASK.NEW_TAKS.TITLE, MESSAGES.TASK.NEW_TAKS.DESCRIPTION)
  await appUpcoming.upcomingSection()
  await t.expect((appUpcoming.tomorrowTask).exists).ok()
})

// Test-happypath: Adding and validating the creation of multiple tasks
test.meta('type', 'smoke')('Adding multiple task ', async t => {
  await appToday.addNewTasks(TASKS.TASK_NUMBER.NUMBER)
  await t.expect(await appToday.validateTaskCreated(TASKS.TASK_NUMBER.NUMBER)).ok()
})

// Test-happypath: to delete the tasks created
test.meta('type', 'smoke')('As a user, I want to delete all my tasks', async t => {
  await appToday.deleteTask()
  await t.expect((appToday.completedTask).exists).ok()
})
