import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { userContext } from "../../context/UserContext";
import { User } from "../../models/user.model";

export default () => {

  const [state, dispatch] = useContext(userContext);
  
  const obj = Object.entries(state as User)
  
  return (
    <div>
      {obj.map((entry)=>{
        return (
          <div key={entry[0]}>

            <h3>{entry[0]}</h3>
            <h4>{entry[1]}</h4>
          </div>

        )
      })}
    </div>
  )
};
