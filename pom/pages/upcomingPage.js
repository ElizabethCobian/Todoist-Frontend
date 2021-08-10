import { Selector, t } from 'testcafe'
import { TASKS } from '../data/Constants'

class upcomingPage {
  constructor () {
    this.tomorrowTask = Selector('.markdown_content.task_content').withExactText(TASKS.TASK_TITLES.TITLE)
    this.plusButton = Selector('.plus_add_button')
    this.titleTaks = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
    this.addTaskButton = Selector('button[type="submit"]')
    this.cancelTaskButton = Selector('button.reactist_button.reactist_button--secondary')
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

export default new upcomingPage()
