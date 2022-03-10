import { toast } from "react-toastify";

const REF = {
  set: (ref, val) => (ref.current.value = val),
  get: (ref) => ref.current.value,
};

const VALIDATION = {
  isEmpty: (val) => !val,
};

const TOAST = {
  error: (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
};

export const Helper = { REF, VALIDATION,TOAST };
