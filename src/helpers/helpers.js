import { TodoStatus } from "model";

export const useHelper = {
  UTIL: {
    If: (cd, resolve) => {
      if (cd) resolve();
    },

    callApi: (apiFunc, setLoader, onError, onSuccess) => async () => {
      setLoader(true);
      try {
        let res = await apiFunc();
        onSuccess(res.data);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        if (!useHelper.VALIDATION.isUndefined(err.response)) {
          onError(err.response.data?.msg);
        }
      }
    },
  },
  getColorByStatusTask: (content) => {
    switch (content) {
      case TodoStatus.TODO:
        return "primary";
      case TodoStatus.DONE:
        return "success";
      case TodoStatus.INPROGRESS:
        return "info";
      default:
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
    isThereAnInputEmpty: (fields) => {
      console.log(fields);
      for (const k in fields) if (!fields[k]) return true;
      return false;
    },
    isUndefined: (val) => val === undefined,
    inTaskStatusVals: (val) => {
      return (
        val !== TodoStatus.DONE &&
        val !== TodoStatus.CANCELED &&
        val !== TodoStatus.INPROGRESS &&
        val !== TodoStatus.TODO
      );
    },
    isEmpty: (val) => val.length === 0,
    isNull: (val) => val === null,
  },
  SELECTOR: {
    userId: (s) => s.auth.user.id,
    tasksAndUserId: (s) => ({
      userId: useHelper.SELECTOR.userId(s),
      mytasks: useHelper.SELECTOR.tasks(s),
    }),
    tasks: (s) => {
      if (s.filter.query === "") return s.task.list;
      else return s.task.list.filter((t) => t.title.includes(s.filter.query));
    },
  },
};
