import { URLS, PROJECT, TIMEOUTS } from '../data/Constants'
import basePage from '../pages/BasePage'
import projects from '../pages/ProjectsPage'
import { STANDAR_USER } from '../data/Roles'

fixture('Projects')
  .page(URLS.LOGIN_URL)

  // BeforeEach: Confirming I'm doing login with the correctly
  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((basePage.todayTitle).exists).ok({ timeout: TIMEOUTS.ASSERTION_TIMEOUT })
  })

// Test-happypath: Creating a new project
test('Creating a new project', async t => {
  await basePage.addProject()
  await projects.createProjectModal(PROJECT.PROJECT_NAME)
  await t.expect((projects.projectAdded).exists).ok()
})
