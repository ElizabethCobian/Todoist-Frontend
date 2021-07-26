import { PROJECT } from '../data/Constants'
import { Selector, t} from 'testcafe'

class projects{
    constructor(){
        this.addNewProjectButton = Selector('button.adder_icon')
        this.addProjectTitle = Selector('.reactist_modal_box__header')
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.selectDropdown = Selector('.color_dropdown_toggle.form_field_control')
        this.selectColor = Selector('.color_dropdown_select__name').withExactText('Teal')
        this.addFavoriteCheck = Selector('.reactist_switch')
        this.addProjectButton = Selector('.ist_button.ist_button_red').withExactText('Add')
        this.projectAdded = Selector('#projects_list > .clickable.menu_clickable.indent_1').nth(1).withExactText('My project')

    }
    async addProject(name){
        await t
            .click(this.addNewProjectButton)
            .typeText(this.nameProjectInput, name)
            .click(this.selectDropdown)
            .click(this.selectColor)
            .click(this.addFavoriteCheck)
            .click(this.addProjectButton)
    }
}
export default new projects