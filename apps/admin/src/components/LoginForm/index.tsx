import React, { FormEventHandler, useContext, useRef } from "react";
import "./style.css";
import { authService } from "../../services/auth.service";
import { useInputValue } from "../../hooks/useInputValue";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group__container">
          <div className="input-group__label-input">
            <label className="body-small" htmlFor="email">Email</label>
            <input className="body-large" id="email" type="email" name="email" {...email} />
          </div>
          <span className="material-symbols-outlined">cancel</span>
        </div>
        <span className="input-group__supporting-text body-small">supporting text</span>
      </div>
      <div className="input-group">
        <div className="input-group__container">
          <div className="input-group__label-input">
            <label className="body-small" htmlFor="email">password</label>
            <input className="body-large" id="password" type="password" name="password" {...password} />
          </div>
          <span className="material-symbols-outlined">cancel</span>
        </div>
        <span className="input-group__supporting-text body-small">supporting text</span>
      </div>
      <button className="btn btn--filled" type="submit">
        <div className="btn--filled__container">
          <span className="btn--filled__text label-large">Login</span>
        </div>
      </button>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </form>
  );
};
