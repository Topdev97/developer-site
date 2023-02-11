import React, { ChangeEvent, FocusEventHandler, FormEvent, useContext, useRef } from "react";
import "./style.css";
import { config } from "../../config";
import { AppContext } from "../../context/AppContext";
import {useNavigate} from'react-router-dom'

export const SignForm = () => {
  const [state,dispatch]:any = useContext(AppContext)
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);
  const [validationErrors, setValidationErrors]: any = React.useState({});

  const navigate = useNavigate()

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target?.name]: event.target?.value,
    });
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const iterableData = Object.entries(data);
      iterableData.forEach((item) => {
        const [key, value] = item;
        validate(key, value);
      });
      const response = await fetch(`${config.apiUri}/auth`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
      if(response.status == 200){

        const {token} = await response.json()
        dispatch({type:'SET_USER',payload:{email:data.email,token}})
        setSubmitMessage(null)
        event.target.reset()
        navigate('/profile')
      } else {
        setSubmitMessage('Email or password incorrect')
      }
      
      
      setLoading(false);
    } catch (error) {
      console.error("Error en submit", error);
      setLoading(false);
      setSubmitMessage("Hubo un error");
    }

    // console.log(data)
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    validate(event.target.name, event.target.value);
  };

  const validate = (field: string, value: any) => {
    switch (field) {
      case "email":
        if (false) {
          setValidationErrors({
            ...validationErrors,
            [field]: "No es el email correcto",
          });
          throw new Error("Email invalido");
        } else {
          setValidationErrors({
            ...validationErrors,
            [field]: null,
          });
          console.log("Todo Ok");
        }
        break;

      default:
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-groups">
        <label htmlFor="email">Email</label>
        <input
          onBlur={handleBlur}
          required
          onChange={handleInputChange}
          id="email"
          type="email"
          name="email"
        />
        {validationErrors.email && <p>{validationErrors.email}</p>}
      </div>
      <div className="input-groups">
        <label htmlFor="password">Password</label>
        <input
          minLength={8}
          onBlur={handleBlur}
          required
          onChange={handleInputChange}
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
