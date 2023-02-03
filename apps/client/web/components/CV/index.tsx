


export const CV = (props:any) => {
    const uri = `https://drive.google.com/file/d/125RELWGNV0HRzPZjkRPf0LHGPFcj6yM6/view?usp=sharing`
    
    
    return (
    <a href={uri} download className={`text-lg text-center font-semibold bg-primary-400 hover:bg-primary-500 transition-all text-primary-100 px-4 py-3 w-full md:w-72 lg:mt-0 ${props.styles}`}>Download CV</a>
  )
}
