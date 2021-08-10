import upcomingPage from '../pages/upcomingPage'
import basePage from '../pages/basePage'
import { URLS, TIMEOUTS } from '../data/constants'
import { STANDAR_USER } from '../data/roles'

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
  await upcomingPage.newTaskTomorrow('Title')
  await t.expect((basePage.taskItems).exists).ok()
})
