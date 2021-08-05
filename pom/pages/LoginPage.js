import { Selector, t } from 'testcafe'

class loginPage {
  constructor () {
    this.emailInput = Selector('#email')
    this.passwordInput = Selector('#password')
    this.loginButton = Selector('button').withExactText('Log in')
    this.errorLoginMessage = Selector('.error_msg')
  }

  // Function to do login with a success user credentials
  async doSuccessLogin (username, password) {
    if (username != null) {
      await t.typeText(this.emailInput, username)
    }
    if (password != null) {
      await t.typeText(this.passwordInput, password)
    }
    await t.click(this.loginButton)
  }

  // Function to do login with an incorrect credentials user
  async invalidLogin (username, password) {
    await t
      .typeText(this.emailInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton)
  }
}

export default new loginPage()
