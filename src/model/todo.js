export class TodoModel {
    constructor(id = 0, title = "", completed = false, userId = 1) {
        this.id = id
        this.userId = userId
        this.title = title
        this.completed = completed
    }
}