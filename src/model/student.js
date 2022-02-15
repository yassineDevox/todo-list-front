export class StudentModel {
    constructor(
        id = 0,
        firstname = "",
        lastname = "",
        email = "",
        phone = "",
        github = "",
        linkedIn = ""
    ) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phone = phone
        this.github = github
        this.linkedIn = linkedIn
    }



}