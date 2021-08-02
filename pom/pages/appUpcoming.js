import { Selector, t } from 'testcafe'
import { MESSAGES } from '../data/Constants'

class appUpcoming {
  constructor () {
    this.upcomingSectionButton = Selector('.item_content').withExactText('Upcoming')
    this.tomorrowTask = Selector('.markdown_content.task_content').withExactText(MESSAGES.TASK.NEW_TAKS.TITLE)
  }

  // Function to verify the task were added to the upcoming sections
  async upcomingSection () {
    await t
      .click(this.upcomingSectionButton)
  }
}
// eslint-disable-next-line new-cap
export default new appUpcoming()
