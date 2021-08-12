/* eslint-disable no-dupe-class-members */
import { Selector, t } from 'testcafe'
import { TASKS } from '../data/Constants'

class basePage {
  constructor () {
    //Buttons - actions
    this.buttonAddNewTask = Selector('button.plus_add_button')
    this.buttonAddTask = Selector('button[type="submit"]')
    this.moreActionButton = Selector('.more_actions_button')
    this.deleteOption = Selector('.icon_menu_item__content').withExactText('Delete task')
    this.deleteConfirmation = Selector('.ist_button.ist_button_red')
    // Elements
    this.todayTitle = Selector('h1, .view_header__content .simple_content').withExactText('Today')
    this.titleTaks = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
    this.taskCreated = Selector('.markdown_content.task_content').withExactText(TASKS.TASK_TITLES.TITLE)
    this.changeDateDue = Selector('button.item_due_selector.icon_pill')
    this.dateTomorrow = Selector('.scheduler-suggestions-item-icon--tomorrow')
    this.taskItems = Selector('.task_list_item')
    this.completedTask = Selector('.completed_today')
    //Left-Menu
    this.upcomingSectionButton = Selector('.item_content').withExactText('Upcoming')
    this.addNewProjectButton = Selector('button.adder_icon')
    this.projectItems = Selector('.clickable.menu_clickable.indent_1')
    this.projectIconMenu = Selector('.icon.menu.gear_menu')
    this.projectDeleteOption = Selector('#menu_delete_text')
  }

  // Function to create a new task (today due date)
  async createNewTaskToday (title) {
    await t
      .click(this.buttonAddNewTask)
      .typeText(this.titleTaks, title)
      .click(this.buttonAddTask)
  }

  // Function to create a new task for (tomorrow due date)
  async createNewTaskTomorrow (title) {
    await t
      .click(this.buttonAddNewTask)
      .typeText(this.titleTaks, title)
      .click(this.changeDateDue)
      .click(this.dateTomorrow)
      .click(this.buttonAddTask)
  }

  // Function to create a 2nd task without the + button to create tasks
  async createTask (title) {
    const is_first_task = await this.buttonAddNewTask.exists

    if (is_first_task) {
      await t
        .click(this.buttonAddNewTask)
        .typeText(this.titleTaks, title)
        .click(this.buttonAddTask)
    } else {
      await t
        .typeText(this.titleTaks, title)
        .click(this.buttonAddTask)
    }
  }

  // Function to add the title to the new tasks craeted
  async addNewTasks (taskTitle, taskNumber) {
    for (let i = 0; i < taskNumber; i++) {
      await this.createTask(taskTitle + i)
    }
  }

  // Function to validate the tasks were created correctly
  async validateTaskCreated (taskNumber) {
    const totalTask = await this.taskItems.count

    if (totalTask == taskNumber) {
      return true
    } else {
      return false
    }
  }

  async validateMultipleTasks (taskTitle, numberOfTasks) {
    const totalTask = await this.taskItems.count

    for (let i = 0; i < numberOfTasks; i++) {
      await t.expect(this.taskItems.nth(i).innerText).contains(taskTitle + i)
    }

    if (totalTask == numberOfTasks) {
      return true
    } else {
      return false
    }
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
