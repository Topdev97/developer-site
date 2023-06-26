import React, { useContext, useState } from "react";
import { UserContext, userReducerActions } from "../../context/UserContext";
import { User } from "../../models/user.model";
import { authService } from "../../services/auth.service";
import { AuthContext } from "../../context/AuthContext";

export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { state, dispatch } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const getProfile = async () => {
    setLoading(true);
    try {
      const profile = await authService.getProfile(token as string);

      dispatch({ type: userReducerActions.SET_USER, payload: profile });
      setError(null);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getProfile();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
    <div>
      {Object.entries(state as User).map((entry)=>{
        return (
          <div key={entry[0]}>
            {entry[0]}: {entry[1]}
          </div>
        )
      })}
    </div>
    )
  }
};
