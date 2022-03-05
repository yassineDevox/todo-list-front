import { StudentModel } from "./student";

export class CheckpointModel {
  constructor(id = 0, name = "", chapter = "", dateSubmition = new Date(),student = new StudentModel(),status="") {
    this.id = id;
    this.name = name;
    this.chapter = chapter;
    this.dateSubmition = dateSubmition;
    this.student = student;
    this.status=status
  }
}
