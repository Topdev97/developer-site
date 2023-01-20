import React from 'react'
import { useRouter } from 'next/router'
import { useGetSingleProject } from '../../hooks/useGetSingleProject'
import { ProjectDetail } from '../../components/ProjectDetail'
import { Layout } from '../../components/Layout'

const Project = () => {
  const router = useRouter()
  const {slug} = router.query
  const {project,loading} = useGetSingleProject(slug)
  
  if(loading) {
    return (
      <p>Loading...</p>
    )
  }
  else if(project) {
    return (
      <Layout>
        <main className='p-4 lg:p-8'>
          <ProjectDetail {...project} />
        </main>

      </Layout>
    )
  } 

}

export default Project