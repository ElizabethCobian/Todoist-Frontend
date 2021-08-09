import { Role } from 'testcafe'
import { URLS, CREDENTIALS } from './constants'
import loginPage from '../pages/loginPage'

export const STANDAR_USER = Role(URLS.LOGIN_URL, async t => {
  await loginPage.doSuccessLogin(CREDENTIALS.VALID_USER.USER_EMAIL, CREDENTIALS.VALID_USER.USER_PASSWORD)
}, { preserveUrl: true })
