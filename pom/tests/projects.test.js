import { URLS, CREDENTIALS, PROJECT } from '../data/Constants'
import loginPage from '../pages/LoginPage'
import appToday from '../pages/appToday'
import  projects  from '../pages/projectsPage'

fixture('Projects')
    .page (URLS.LOGIN_URL)
    .beforeEach(async t => {
        await loginPage.doSuccessLogin(CREDENTIALS.VALID_USER.USER_EMAIL, CREDENTIALS.VALID_USER.USER_PASSWORD)
        await t.expect((appToday.todayTitle).exists).ok({timeout: 10000})
    })

test('Creating a new project', async t => {
    await projects.addProject(PROJECT.PROJECT_NAME)
    await t.expect((projects.projectAdded).exists).ok()
})