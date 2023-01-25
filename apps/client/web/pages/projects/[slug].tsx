import React from 'react'
import { useRouter } from 'next/router'
import { useGetSingleProject } from '../../hooks/useGetSingleProject'
import { ProjectDetail } from '../../components/ProjectDetail'
import { Layout } from '../../components/Layout'
import Head from 'next/head'

export const getServerSideProps = async ({params}:any) => {
  const response = await fetch(`https://davc93.dev/api/projects/${params.slug}`)
  const data = await response.json()

  return {
    props:{
      project:data
    }
  }
}

const Project = ({project}:any) => {
  // const router = useRouter()
  // const {slug} = router.query
  // const {project,loading} = useGetSingleProject(slug)
  
    return (
      <>
      <Head>
          <title>{project.title} - davc93</title>
      </Head>
      <Layout>
        <main className='p-4 lg:p-8'>

          {project ? <ProjectDetail {...project} /> : <p>Loading</p> }
          
        </main>

      </Layout>

      </>
    )
   

}

export default Project