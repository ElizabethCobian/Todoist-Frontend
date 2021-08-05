import loginPage from '../pages/LoginPage'
import appToday from '../pages/appToday'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'
import { STANDAR_USER } from '../data/Roles'

fixture('Login feature test')
  .page(URLS.LOGIN_URL)

// Test-happypath: Do a success login
test.meta('type', 'smoke')('As a user, I should be able to log in successfully by providing valid credentials', async t => {
  await t.useRole(STANDAR_USER)
  await t.expect((appToday.todayTitle).exists).ok({ timeout: 10000 })
})

// Test-sadpath: Providing null e-mail and password, validating error messages
test('As a user, if I enter a null information I shouldnt be able to login and see an specif error message', async t => {
  await loginPage.doSuccessLogin(null, null)
  await t.expect(loginPage.errorLoginMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})

// Test-sadpath: Enter a valid e-mail but not password, validating error messages
test('As a user, if I enter a correct email BUT incorrect password I shouldnt be able to login and see an specific error message', async t => {
  await loginPage.doSuccessLogin(CREDENTIALS.VALID_USER.USER_EMAIL, null)
  await t.expect(loginPage.errorLoginMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.BLANK_PASSWORD)
})

// Test-sadpath: Enter a invalid credentials, validating error messages
test('As a user, I shouldnt be able to login if I enter invalid credentials', async t => {
  await loginPage.invalidLogin(CREDENTIALS.INVALID_USER.USER_EMAIL, CREDENTIALS.INVALID_USER.USER_PASSWORD)
  await t.expect(loginPage.errorLoginMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_EMAIL)
})
