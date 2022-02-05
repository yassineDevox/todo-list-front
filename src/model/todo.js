export class TodoModel{
    constructor(id=0,title="",completed=false,userId=1){
        this.id=id
        this.title=title
        this.userId=userId
        this.completed=completed
    }
}