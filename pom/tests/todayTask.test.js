import loginPage from '../pages/LoginPage'
import appToday from '../pages/appToday'
import appUpcoming from '../pages/appUpcoming'
import { URLS, CREDENTIALS, MESSAGES, TASKS } from '../data/Constants'

fixture('Creating Taks')    
    .page (URLS.LOGIN_URL)
    .beforeEach(async t => {
        await loginPage.doSuccessLogin(CREDENTIALS.VALID_USER.USER_EMAIL, CREDENTIALS.VALID_USER.USER_PASSWORD)
        await t.expect((appToday.todayTitle).exists).ok({timeout: 10000})
    })

test('As a user, I should be able to create a new taks for Today', async t => {
    await appToday.createNewTaskToday(MESSAGES.TASK.NEW_TAKS.TITLE , MESSAGES.TASK.NEW_TAKS.DESCRIPTION)
    await t.expect((appToday.taskCreated).exists).ok()
})
test('As a user, I should be able to create a new task for Tomorrow', async t => {
    await appToday.createNewTaskTomorrow(MESSAGES.TASK.NEW_TAKS.TITLE , MESSAGES.TASK.NEW_TAKS.DESCRIPTION)
    await appUpcoming.upcomingSection()
    await t.expect((appUpcoming.tomorrowTask).exists).ok()
})

test.only('Adding multiple task ', async t => {
    await appToday.addNewTasks(TASKS.TASK_NUMBER.NUMBER)
    await t.expect(await appToday.validateTaskCreated(TASKS.TASK_NUMBER.NUMBER)).ok()
})

test('As a user, I want to delete all my tasks', async t => {
    await appToday.deleteTask()
    await t.expect((appToday.completedTask).exists).ok()
})



///cambiar el numero de adding multiple task por una constante ya que es mala práctica ponerlo aquí
