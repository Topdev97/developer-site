import { useRef } from "react";

export const SignForm = () => {
  const username:any = useRef(null)
  const password :any= useRef(null)
  const error = false
  function handleSubmit(event:any) {
    
    event.preventDefault()
    const usernameValue = username.current?.value 
    const passwordValue = password.current?.value
    username.current.value = ""
    password.current.value = ""

  }



  return (
    <form>
      <div>
        <label htmlFor=""></label>
        <input ref={username} type="text" name="" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input ref={password} type="password" name="" />
      </div>
      <button type="submit" onClick={handleSubmit}>Login</button>
      {error && 
      <div className="error-message">
        <h4>Hubo un error</h4>
      </div>
      }
      
    </form>
  );
};
