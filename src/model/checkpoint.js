import { StudentModel } from "./student";

export class CheckpointStatus {
  static get NOT_YET_STARTED() {
    return "NOT_YET_STARTED";
  }
  static get OPENED() {
    return "OPENED";
  }
  static get CLOSED() {
    return "CLOSED";
  }
  static get INPROGRESS() {
    return "INPROGRESS";
  }
  static get FAILED() {
    return "FAILED";
  }
  static get RETRY() {
    return "RETRY";
  }
}

export class CheckpointModel {
  constructor(
    id = 0,
    name = "",
    chapter = "",
    dateSubmition = new Date(),
    student = new StudentModel(),
    status = CheckpointStatus.NOT_YET_STARTED
  ) {
    this.id = id;
    this.name = name;
    this.chapter = chapter;
    this.dateSubmition = dateSubmition;
    this.student = student;
    this.status = status;
  }
}
