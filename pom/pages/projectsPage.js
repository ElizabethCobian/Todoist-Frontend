/* eslint-disable no-console */
import { Selector, t } from 'testcafe'
import basePage from '../pages/BasePage'
import { PROJECT } from '../data/Constants'

class projects {
  constructor () {
    // Project page
    this.projectOptionMenuEdit = Selector('button[aria-label="Project options menu"]')
    // Menu Edit Options
    this.editProjectOption = Selector('.icon_menu_item__content').withExactText('Edit project')
    // Edit Project Modal
    this.projectNameInput = Selector('#edit_project_modal_field_name')
    this.projectColorDropdown = Selector('.color_dropdown_toggle')
    this.projectFavoriteCheckbox = Selector('.reactist_switch')
    // Extra Selectors
    this.addProjectTitle = Selector('.reactist_modal_box__header')
    this.nameProjectInput = Selector('#edit_project_modal_field_name')
    this.selectDropdown = Selector('.color_dropdown_toggle.form_field_control')
    this.selectColor = Selector('.color_dropdown_select__name').withExactText(PROJECT.FAVORITE_PROJECT.COLOR)
    this.addFavoriteCheck = Selector('.reactist_switch')
    this.addProjectButton = Selector('.ist_button.ist_button_red').withExactText('Add')
  }

  // Function for the workflow to create a new project
  async createProjectModal (name) {
    await t
      .typeText(this.nameProjectInput, name)
      .click(this.selectDropdown)
      .click(this.selectColor)
      .click(this.addFavoriteCheck)
      .click(this.addProjectButton)
  }

  // Function to show the Edit Project Modal
  async editProjectModal () {
    await basePage.clickOnProject()
    await t
      .click(this.projectOptionMenuEdit)
      .click(this.editProjectOption)
  }

  // Function to validate the project is correct
  async validateProject (projectName, projectColor, isFavorite = false) {
    const favoriteFlag = isFavorite
    await t
      .click(this.projectOptionMenuEdit)
      .click(this.editProjectOption)

    const infoProject = {
      name: await this.projectNameInput.value,
      color: await this.projectColorDropdown.innerText,
      isFavorite: await this.projectFavoriteCheckbox.hasClass('reactist_switch--checked')
    }
    if (infoProject.name == projectName && infoProject.color == projectColor && infoProject.isFavorite == favoriteFlag) {
      return true
    } else {
      return false
    }
  }

  async validateProjectV2 (projectName, projectColor, isFavorite = false) {
    await t.expect(this.projectNameInput.value).contains(projectName)
    await t.expect(this.projectColorDropdown.innerText).contains(projectColor)
    if (isFavorite == true) {
      await t.expect(this.projectFavoriteCheckbox.hasClass('reactist_switch--checked')).ok()
    } else {
      await t.expect(this.projectFavoriteCheckbox.hasClass('reactist_switch--checked')).notOk()
    }
    return true
  }
}

export default new projects()
