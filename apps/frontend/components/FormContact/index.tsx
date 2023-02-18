import React, { ChangeEvent, FormEvent, useRef } from "react";

export const FormContact = () => {
    const [data, setData] = React.useState({name:'',email:'',message:''})
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
    const [submitMessage, setSubmitMessage] = React.useState<string | null>(null)
    const formRef = useRef<HTMLFormElement>(null)
    React.useEffect(()=>{
        console.log(data)
        if(data.name.length !== 0  && data.email.length !== 0 && data.message.length !== 0){
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    },[data])

    const handleChange = (event:ChangeEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;
        setData({
            ...data,
            [target.name]:target.value
        })

    }
    const handleSubmit = async (event:FormEvent) => {
        event.preventDefault()
        
        if(!isButtonDisabled){
            try {
                const response = await fetch('/api/contact',{
                    method:'POST',
                    body:JSON.stringify(data)
                })
                const dataResponse = await response.json()
                console.log(dataResponse)

                formRef.current?.reset()
                setData({name:'',email:'',message:''})
                setIsButtonDisabled(true)
                setSubmitMessage('Gracias por tu mensaje, pronto me estaré comunicando contigo!')
                setTimeout(() => {
                    setSubmitMessage(null)
                }, 5000);
            } catch (error) {
                console.error(error)
                setSubmitMessage(error as any)
            }

        } else {
            setSubmitMessage('Debes llenar todos los campos')
        }
    }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{width:280}} className="flex flex-col w-76" >
      <div className="input-group">
        <label htmlFor="form-contact__name">Name</label>
        <input onInput={handleChange}  type="text" name="name" id="form-contact_name" />
      </div>
      <div className="input-group">
        <label htmlFor="form-contact__email">Email</label>
        <input onInput={handleChange}  type="text" name="email" id="form-contact__email" />
      </div>
      <div className="input-group">
        <label htmlFor="form-contact_message">Message</label>
        <textarea onInput={handleChange}  name="message" id="form-contact__message"></textarea>
      </div>
      <button className={`mt-6 btn--primary ${isButtonDisabled ? "btn--disabled" : ""}`} type="submit">Enviar</button>
      <div className="" id="form-contact__submit-message">
        <h4 className="mt-6">{submitMessage}</h4> 
      </div>
    </form>
  );
};
