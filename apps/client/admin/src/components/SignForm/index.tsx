import React, { ChangeEvent, FocusEventHandler, FormEvent } from "react";
import "./style.css";

export const SignForm = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);
  const [validationErrors, setValidationErrors]:any = React.useState({})
  React.useEffect(() => {
    // console.log(data);
  }, [data]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target?.name]: event.target?.value,
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      try {
        const iterableData = Object.entries(data);
        iterableData.forEach((item) => {
          const [key, value] = item;
          validate(key, value);
        });
        setSubmitMessage("Todo bien");
        setLoading(false);
      } catch (error) {
        console.error("Error en submit", error);
        setLoading(false);
        setSubmitMessage("Hubo un error");
      }
    }, 2000);

    // console.log(data)
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    validate(event.target.name, event.target.value);
  };

  const validate = (field: string, value: any) => {
    switch (field) {
      case "email":
        if (value !== "davc93@gmail.com") {
          setValidationErrors({
            ...validationErrors,
            [field]:"No es el email correcto"
          })
          throw new Error("Email invalido");
        } else {
          setValidationErrors({
            ...validationErrors,
            [field]:null
          })
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
