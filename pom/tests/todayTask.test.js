import loginPage from '../pages/LoginPage'
import appToday from '../pages/appToday'
import appUpcoming from '../pages/appUpcoming'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'

//const dataSet = require('../data/data.json');

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

test('Adding multiple task ', async t => {
    await appToday.addNewTasks(10)
    await t.expect(await appToday.validateTaskCreated(10)).ok() 
})



///cambiar el numero de adding multiple task por una constante ya que es mala práctica ponerlo aquí
