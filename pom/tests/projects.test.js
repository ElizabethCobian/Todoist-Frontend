import { URLS, PROJECT } from '../data/constants'
import basePage from '../pages/basePage'
import projects from '../pages/projectsPage'
import { STANDAR_USER } from '../data/roles'

fixture('Projects')
  .page(URLS.LOGIN_URL)

  // BeforeEach: Confirming I'm doing login with the correct user and I'm on the expected page
  .beforeEach(async t => {
    await t.useRole(STANDAR_USER)
    await t.expect((basePage.todayTitle).exists).ok({ timeout: 10000 })
  })

// Test-happypath: Creating a new project
test('Creating a new project', async t => {
  await basePage.addProject()
  await projects.createProjectModal(PROJECT.PROJECT_NAME)
  await t.expect((projects.projectAdded).exists).ok()
})
