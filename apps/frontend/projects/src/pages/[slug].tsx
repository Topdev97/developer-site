import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Project} from "@/models/project.model"
import { projectService } from "@/services/project.service"
import { ProjectDetail } from "@/components/ProjectDetail"
import { NextPageContext ,NextPage} from "next"

const useGetProject = (slug:string) => {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = useState<string | null>(null)
    const [project, setProject] = useState<Project | null>(null)

    const getProject = async () => {
        setLoading(true)
        try {
            const project = await projectService.getProjects({slug})
            setProject(project[0])
            setError(null)
        } catch (error) {
            setError(`${error}`)
        }
        setLoading(false)

    }
    useEffect(()=>{
        getProject()
        
    },[])
    return {
        loading,
        error,
        project
    }
}
export async function getServerSideProps(context: NextPageContext) {
  // Fetch data based on the slug parameter
  const {slug} = context.query
    const project = await projectService.getProjects({slug})

  // Pass the fetched data as props to the page component
  return { props: { project } };
}
interface ProjectPageProps {
  project: Project[]
}


 function ProjectPage({project}:ProjectPageProps){
    
    return (
        <main className="px-2 md:px-32 py-4 md:py-20">
            { project ? <ProjectDetail project={project[0]}/> : (<p>Loading</p>) } 
        </main>
    )

}

export default ProjectPage as NextPage<ProjectPageProps>