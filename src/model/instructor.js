import { StudentModel } from "./student"

export class InstructorModel extends StudentModel {
    constructor(
        id = 0,
        firstname = "",
        lastname = "",
        email = "",
        phone = "",
        github = "",
        linkedIn = "",
        professionalExpYearNb = 0,
        industry = "",
        status = "",
        gender = "",
        typeOfStudy = "",
        addres = "",
        dateOfBirthDay = new Date(),
    ) {
        super(id, firstname, lastname, email, phone, github, linkedIn)
        this.professionalExpYearNb = professionalExpYearNb
        this.industry = industry
        this.status = status
        this.gender = gender
        this.typeOfStudy = typeOfStudy
        this.addres = addres
        this.dateOfBirthDay = dateOfBirthDay

    }
}