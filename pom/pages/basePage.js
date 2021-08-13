/* eslint-disable no-dupe-class-members */
import { Selector, t } from 'testcafe'
import { TASKS } from '../data/Constants'

class basePage {
  constructor () {
    //Delete Elements
    this.moreActionButton = Selector('.more_actions_button')
    this.deleteOption = Selector('.icon_menu_item__content').withExactText('Delete task')
    this.deleteConfirmation = Selector('.ist_button.ist_button_red')
    // Elements
    this.todayTitle = Selector('h1, .view_header__content .simple_content').withExactText('Today')
    this.taskName = Selector('.markdown_content.task_content').withExactText(TASKS.TASK_TITLES.TITLE)
    this.taskItems = Selector('.task_list_item')
    //Left-Menu
    this.upcomingSectionButton = Selector('.item_content').withExactText('Upcoming')
    this.addNewProjectButton = Selector('button.adder_icon')
    this.projectItems = Selector('.clickable.menu_clickable.indent_1')
    this.projectIconMenu = Selector('.icon.menu.gear_menu')
    this.projectDeleteOption = Selector('#menu_delete_text')
  }

  // Function to delete all the tasks on the dashboard
  async deleteAllTasks () {
    const existingTask = await this.taskItems.count

    if (existingTask > 0) {
      for (let index = 0; index < existingTask; index++) {
        await t
          .hover(this.taskItems.nth(0))
          .click(this.moreActionButton)
          .click(this.deleteOption)
          .click(this.deleteConfirmation)
      }
    }
  }

  // Function to access into the Upcoming section
  async upcomingSection () {
    await t
      .click(this.upcomingSectionButton)
      await this.deleteAllTasks()
  }

  // Function to click plus button to create a new project
  async addProject () {
    await t
      .click(this.addNewProjectButton)
    }

      // Function to delete all the projects
  async deleteProjects () {
    const existingProject = await this.projectItems.count

    if (existingProject > 0) {
      for (let index = 0; index < existingProject; index++) {
        await t
          .hover(this.projectItems.nth(0))
          .click(this.projectItems)
          .click(this.projectIconMenu)
          .click(this.projectDeleteOption)
          .click(this.deleteConfirmation)
      }
    }
  }

  async clickOnProject () {
    await t
      .click(this.projectItems)
  }
}

export default new basePage()
