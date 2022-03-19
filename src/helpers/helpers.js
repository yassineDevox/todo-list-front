import { TodoStatus } from "model";

export const useHelper = {
  UTIL: {
    If: (cd, resolve, reject) => {
      if (cd) resolve();
      else reject();
    },

    callApi: async (apiFunc,setLoader,onError,onSuccess) => {
      try {
        let res = await apiFunc();
        onSuccess(res.data)
        setLoader(false);
      } catch (err) {
        setLoader(false);
        if (useHelper.VALIDATION.isEmpty(err.response.data)) {
          onError(err.response.data);
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
    isThereAnInputEmpty: (fields) => {
      for (const k in fields) {
        if (!fields[k]) return true;
        return true;
      }
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
  },
  SELECTOR: {
    tasks: (s) => {
      if (s.filter.query === "") return s.task.list;
      else return s.task.list.filter((t) => t.title.includes(s.filter.query));
    },
  },
};