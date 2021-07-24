import { Selector, t} from 'testcafe'

class projects{
    constructor(){
        this.addNewProjectButton = Selector('button.adder_icon')
        this.addProjectTitle = Selector('.reactist_modal_box__header')
        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.dropdownColor = Selector('button.color_dropdown_toggle.form_field_control')
    }
    async addProject(name){
        await t
            .click(this.addNewProjectButton)
            .typeText(this.nameProjectInput, name)
            .click(this.dropdownColor)
    }
}
export default new projects