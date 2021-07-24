import { Selector, t} from 'testcafe'
import { MESSAGES } from '../data/Constants'

class appUpcoming{
    constructor(){
        this.upcomingSectionButton = Selector('.item_content').withExactText('Upcoming')
        this.tomorrowTask = Selector('.markdown_content.task_content').withExactText(MESSAGES.TASK.NEW_TAKS.TITLE)
    }
    async upcomingSection(){
        await t
            .click(this.upcomingSectionButton)
    }
}
export default new appUpcoming