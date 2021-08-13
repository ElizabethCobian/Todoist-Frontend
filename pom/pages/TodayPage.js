/* eslint-disable space-before-function-paren */
import { Selector, t } from 'testcafe'

class todayPage {
    constructor() {
        // Tasks elements
        this.buttonAddNewTask = Selector('button.plus_add_button')
        this.buttonAddTask = Selector('button[type="submit"]')
        this.deleteOption = Selector('.icon_menu_item__content').withExactText('Delete task')
        this.deleteConfirmation = Selector('.ist_button.ist_button_red')
        this.titleTaks = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskItems = Selector('.task_list_item')
    }

      // Function to create a new task (today due date)
    async createNewTaskToday(title) {
    await t
      .click(this.buttonAddNewTask)
      .typeText(this.titleTaks, title)
      .click(this.buttonAddTask)
    }

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

}

export default new todayPage()