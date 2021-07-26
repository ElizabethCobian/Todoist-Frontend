import { URLS, CREDENTIALS, PROJECT } from '../data/Constants'
import appToday from '../pages/appToday'
import  projects  from '../pages/projectsPage'
import { STANDAR_USER } from '../data/Roles'

fixture('Projects')
    .page (URLS.LOGIN_URL)
    .beforeEach(async t => {
        await t.useRole(STANDAR_USER)
        await t.expect((appToday.todayTitle).exists).ok({timeout: 10000})
    })

test('Creating a new project', async t => {
    await projects.addProject(PROJECT.PROJECT_NAME)
    await t.expect((projects.projectAdded).exists).ok()
})