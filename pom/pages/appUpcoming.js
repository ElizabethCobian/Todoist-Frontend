/* eslint-disable eqeqeq */
/* eslint-disable new-cap */
import { Selector, t } from 'testcafe'
import { MESSAGES } from '../data/Constants'

class appUpcoming {
  constructor () {
    this.upcomingSectionButton = Selector('.item_content').withExactText('Upcoming')
    this.tomorrowTask = Selector('.markdown_content.task_content').withExactText(MESSAGES.TASK.NEW_TAKS.TITLE)
    this.plusButton = Selector('.plus_add_button')
    this.titleTaks = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
    this.addTaskButton = Selector('button[type="submit"]')
    this.cancelTaskButton = Selector('button.reactist_button.reactist_button--secondary')
  }

  // Function to verify the task were added to the upcoming sections
  async upcomingSection () {
    await t
      .click(this.upcomingSectionButton)
  }

  // Function to create new task for tomorrow
  async newTaskTomorrow (title) {
    await t
      .click(this.plusButton.nth(1))
      .typeText(this.titleTaks, title)
      .click(this.addTaskButton)
      .click(this.cancelTaskButton)
  }
}

export default new appUpcoming()
