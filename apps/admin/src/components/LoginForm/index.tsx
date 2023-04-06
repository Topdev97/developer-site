import React, {
  FormEventHandler,
  useContext,
  useRef,
} from "react";
import "./style.css";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  //inputs handler
  const email = useInputValue('')
  const password = useInputValue('')
  // end input handler

  const {setToken} = useContext(AuthContext)  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate()
  
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setLoading(true);
    try {
      const token = await authService.login(email.value,password.value)
      
      setError(null)
      setToken(token.token)
      navigate('/profile')
      
    } catch (error) {
      setError(`${error}`)      
    }
    setLoading(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-groups">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          {...email}
        />
      </div>
      <div className="input-groups">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...password}
        />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </form>
  );
};
