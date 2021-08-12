import upcomingPage from '../pages/UpcomingPage'
import basePage from '../pages/BasePage'
import { URLS, TIMEOUTS, TASKS } from '../data/Constants'
import { STANDAR_USER } from '../data/Roles'

fixture('Testing section upcoming')
  .page(URLS.LOGIN_URL)

  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((basePage.todayTitle).exists).ok({ timeout: TIMEOUTS.ASSERTION_TIMEOUT })
  })
  .afterEach(async t => {
    await t.wait(TIMEOUTS.WAIT_TIMEOUT)
  })

test('Adding task in the Upcoming section with tomorrow due', async t => {
  await basePage.upcomingSection()
  await basePage.deleteAllTasks()
  await upcomingPage.newTaskTomorrow(TASKS.TASK_TITLES.TITLE)
  await t.expect((basePage.taskItems).exists).ok()
})
