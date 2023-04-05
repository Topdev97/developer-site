import React, {
  ChangeEvent,
  FocusEventHandler,
  FormEvent,
  useContext,
  useRef,
} from "react";
import "./style.css";
import { config } from "../../config";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { authService } from "../../services/auth.service";
import { userReducerActions } from "../../context/userReducer";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const LoginForm = () => {
  const [state, dispatch] = useContext(UserContext);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [token,setToken] = useLocalStorage('token',null)
  const [loading, setLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);

  const navigate = useNavigate();
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target?.name]: event.target?.value,
    });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const{email,password} = data
    setLoading(true);
    try {
      const token = await authService.login(email,password)
      setToken(token.token)
      const profile = await authService.getProfile(token.token)

      
      dispatch({type:userReducerActions.SET_USER,payload:profile})
    } catch (error) {
      setSubmitMessage(`${error}`)
      
    }
    setLoading(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-groups">
        <label htmlFor="email">Email</label>
        <input
          required
          onInput={handleInputChange}
          id="email"
          type="email"
          name="email"
        />
      </div>
      <div className="input-groups">
        <label htmlFor="password">Password</label>
        <input
          minLength={8}
          required
          onInput={handleInputChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button type="submit">Login</button>
      {submitMessage && <p>{submitMessage}</p>}
      {loading && <p>Loading...</p>}
    </form>
  );
};
