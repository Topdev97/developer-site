


export const CV = (props:any) => {
    const uri = process.env.NEXT_PUBLIC_CV_URI
    
    return (
    <a href={uri} download className={`text-lg text-center font-semibold bg-primary-400 hover:bg-primary-500 transition-all text-primary-100 px-4 py-3 w-full md:w-72 lg:mt-0 ${props.styles}`}>Download CV</a>
  )
}
