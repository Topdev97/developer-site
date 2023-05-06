import { LoginForm } from "../../components/LoginForm"
import './style.css'

export const LoginPage = () => {
  
  
  return (
    <div className="grid place-content-center place-items-center w-full grid-cols-1 md:grid-cols-2">
      <div className="login-image-container h-screen w-full hidden md:block">
        <img className="h-full" src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_fill,h_1000,w_1200/v1682371472/davc93/landing/Eh_jebw7f.png" alt=""  />
        
      </div>
      <LoginForm />
    </div>
  )
}
