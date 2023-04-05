import  { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { User } from "../../models/user.model";

export const ProfilePage = () => {

  const {state, dispatch} = useContext(UserContext);
  
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
