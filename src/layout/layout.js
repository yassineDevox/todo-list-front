import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUserFromLocalStorage } from "redux/ducks/auth";
import { Footer, NavBar } from "shared";

export const LayoutWebsite = ({ children }) => {
  const call = useDispatch();
  useEffect(() => {
    call(loadUserFromLocalStorage());
  }, [call]);

  return (
    <div className="text-center">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

