import appUpcoming from '../pages/appUpcoming'
import appToday from '../pages/basePage'
import { URLS } from '../data/constants'
import { STANDAR_USER } from '../data/roles'

fixture('Testing section upcoming')
  .page(URLS.LOGIN_URL)

  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((appToday.todayTitle).exists).ok({ timeout: 10000 })
  })
  .afterEach(async t => {
    await t.wait(5000)
  })

test('Adding task in the Upcoming section with tomorrow due', async t => {
  await appUpcoming.upcomingSection()
  await appToday.deleteAllTasks()
  await appUpcoming.newTaskTomorrow('Title')
  await t.expect((appToday.taskItems).exists).ok()
})
