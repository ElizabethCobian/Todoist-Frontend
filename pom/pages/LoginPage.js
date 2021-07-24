import { Selector, t} from 'testcafe'

class loginPage {
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('button').withExactText('Log in')
        this.errorLoginMessage = Selector('.error_msg')
    }
    async doSuccessLogin(username, password) {
        if(username != null){
            await t.typeText(this.emailInput, username)
        }
        if(password != null){
            await t.typeText(this.passwordInput, password)
        }
        await t.click(this.loginButton)
    }
    async invalidLogin(username, password){
        await t
            .typeText(this.emailInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}

export default new loginPage