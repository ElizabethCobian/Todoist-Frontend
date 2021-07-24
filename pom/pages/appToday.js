import { Selector, t} from 'testcafe'
import { MESSAGES, TASK_TITLES } from '../data/Constants'

class appToday {
    constructor(){
        this.todayTitle = Selector('h1, .view_header__content .simple_content').withExactText('Today')
        this.buttonAddNewTask = Selector('button.plus_add_button')
        this.titleTaks = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.descriptionTask = Selector('.task_editor__description_field')
        this.buttonAddTask = Selector('button[type="submit"]')
        this.taskCreated = Selector('.markdown_content.task_content').withExactText(MESSAGES.TASK.NEW_TAKS.TITLE)
        this.changeDateDue = Selector('button.item_due_selector.icon_pill')
        this.dateTomorrow = Selector('.scheduler-suggestions-item-icon--tomorrow')
        this.taskItems = Selector ('.task_list_item')
        this.checkboxTask = Selector('.task_checkbox__circle')
    }
    
    //Function to create a new task (today due date)
    async createNewTaskToday(title, description) {
        await t
            .click(this.buttonAddNewTask)
            .typeText(this.titleTaks, title)
            .typeText(this.descriptionTask, description)
            .click(this.buttonAddTask)
    }
    
    //Function to create a new task for (tomorrow due date)
    async createNewTaskTomorrow(title, description){
        await t
            .click(this.buttonAddNewTask)
            .typeText(this.titleTaks, title)
            .typeText(this.descriptionTask, description)
            .click(this.changeDateDue)
            .click(this.dateTomorrow)
            .click(this.buttonAddTask)
    }

    async createTask(title) {
        let is_first_task = await this.buttonAddNewTask.exists;

        if(is_first_task) {
            await t
            .click(this.buttonAddNewTask)
            .typeText(this.titleTaks, title)
            .click(this.buttonAddTask);
        }
        else {
            await t
            .typeText(this.titleTaks, title)
            .click(this.buttonAddTask);
        }
    } 

    async addNewTasks(taskNumber){
        for (let i = 0; i < taskNumber; i++) {
            await this.createTask(TASK_TITLES.TITLE + i)
        }
    }

    async validateTaskCreated(taskNumber){
        let totalTask = await this.taskItems.count
        if (totalTask == taskNumber) {
            return true
        }
        else {
            return false
        }
    }
}
export default new appToday

