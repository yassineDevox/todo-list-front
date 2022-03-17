import { TodoStatus } from "model";

export const useHelper = {
  getColorByStatusTask: (content) => {
    switch (content) {
      case TodoStatus.TODO:
        return "primary";
      case TodoStatus.DONE:
        return "success";
      case TodoStatus.INPROGRESS:
        return "info";
      case TodoStatus.CANCELED:
        return "danger";
    }
  },
  getDurration: (startedAt, doneAt) => {
    const s = new Date(startedAt);
    const d = new Date(doneAt);
    const durration = d - s;
    const min = Math.floor(durration / 60000);
    const sec = Math.floor((durration - min * 60000) / 1000);
    return `${min}m${sec}s`;
  },
  REF: {
    get: (ref) => ref.current.value,
    set: (ref, value) => (ref.current.value = value),
  },
  VALIDATION: {
    isEmpty: (fields) => {
      for (const k in fields) {
        if (!fields[k]) return true;
        return true;
      }
    },
    inTaskStatusVals: (val) => {
      return (
        val !== TodoStatus.DONE &&
        val !== TodoStatus.CANCELED &&
        val !== TodoStatus.INPROGRESS &&
        val !== TodoStatus.TODO
      );
    },
  },
};
