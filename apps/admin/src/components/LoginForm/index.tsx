import React, { FormEventHandler, useContext, useRef } from "react";
import "./style.css";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "../ButtonLoader";
import { ErrorMessage } from "../ErrorMessage";

export const LoginForm = () => {
  //inputs handler
  const email = useInputValue("");
  const password = useInputValue("");
  // end input handler

  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = await authService.login(email.value, password.value);

      setError(null);
      setToken(token.token);
      navigate("/profile");
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  return (
    <div
      style={{ border: "1px solid var(--primary)",maxWidth:500 }}
      className="form-container login-form py-8 px-12"
    >
      <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input

      style={{ border: "1px solid var(--primary-dark)" }}
            className="body-large "
            id="email"
            type="email"
            name="email"
            {...email}
          />
        </div>
        <div className="input-group">
         <label htmlFor="password">Password</label>
          <input

      style={{ border: "1px solid var(--primary-dark)"}}
            className="body-large"
            id="password"
            type="password"
            name="password"
            {...password}
          />
        </div>
        <button className="btn--primary w-56 h-14" type="submit">
          {loading ? <ButtonLoader/> : 'Login'}

        </button>
        <ErrorMessage>{error}</ErrorMessage>
      </form>
    </div>
  );
};
