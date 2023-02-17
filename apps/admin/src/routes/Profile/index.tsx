import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Profile = () => {
  const navigate = useNavigate();
  const [state, dispatch]:any = useContext(AppContext);
  React.useEffect(() => {
    if (!state.user) {
      navigate("/");
    }
  }, [state.user]);

  return <div>Profile</div>
};
