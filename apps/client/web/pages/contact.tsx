import { FormEvent } from 'react'
import { Layout } from '../components/Layout'

const ContactPage = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { name, message } = event.target
    const data = {
      name: name.value,
      message: message.value
    }
    fetch('http://localhost:5001/davc93/us-central1/helloWorld').then(async (res) => {
      return await res.text()
    }).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Layout>
                <main className="lg:p-8 ">
            <header className="flex justify-center text-center">

                <h1>Contact me and build an idea together </h1>

            </header>

            <section className="contact p-2 my-32 flex justify-center">

                <div className="email flex flex-col md:flex-row w-full md:justify-around  gap-16">
                    <div className="social-media p-4 md:p-12 shadow-lg flex flex-col justify-center">
                        <h3>Social Media</h3>
                        <div className="socia-icons--container flex items-center mt-4 gap-3">
                            <a href="https://www.linkedin.com/in/diego-vergara-casanova/" className="social-icon">
                                <svg className="w-12 h-12 fill-secondary-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="current" fillRule="evenodd" d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z" />
                                </svg>

                            </a>
                            <a href="https://www.instagram.com/davc1993/" className="social-icon">
                                <svg className="w-14 h-14 fill-secondary-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fillRule="nonzero" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                                    </g>
                                </svg>

                            </a>
                            <a href="mailto:davc93@gmail.com" className="social-icon">

                                <svg className="w-16 h-16 fill-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>

                            </a>
                        </div>

                    </div>
                    <div className="email flex flex-col gap-4 shadow-lg p-4 md:p-12">
                        <h3 className="">Email</h3>

                        <span className="self-start text-gray-400">davc93@gmail.com</span>
                        <a href="mailto:davc93@gmail.com" className="btn btn--primary gap-2"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>Send me a email</a>
                    </div>
                </div>

            </section>
            {/* <form onSubmit={handleSubmit} className="simple-form">
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
            <label htmlFor="">Message</label>
            <textarea name="message"></textarea>
            <button type="submit">Enviar</button>
        </form> */}
        </main>
    </Layout>

  )
}

export default ContactPage