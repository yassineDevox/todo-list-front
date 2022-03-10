import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helper } from "../helpers/helper";
import { clearErrorMsg } from "../redux/ducks/auth";

export const useClearError = () => {
  const errorServer = useSelector((s) => s.auth.error);
  const call = useDispatch();
  return useEffect(() => {
    if (!Helper.VALIDATION.isEmpty(errorServer)) {
      Helper.TOAST.error(errorServer);
      call(clearErrorMsg());
    }
  }, [errorServer]);
};

export const useGuardAuth = () => {

  const userInfo = useSelector((s) => s.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userInfo).length === 2) {
      navigate("/dashboard");
    }
  }, [userInfo]);
};
