import React from 'react'
import { useRouter } from 'next/router'
import { Service } from '../../models/service.model'
import { useGetSingleService } from '../../hooks/useGetSingleService'
import { ServiceDetail } from '../../components/ServiceDetail'
import { Layout } from '../../components/Layout'

const Service = () => {
  const router = useRouter()
  const id = router.query.id as string
  const service: Service | any = useGetSingleService(id)

  if (service.description) {

    return (
      <Layout>
        <main className='p-4 lg:p-8'>
          <ServiceDetail {...service} />
        </main>

      </Layout>
    )
  } else{

    return(
      <Layout>
        <p>Loading...</p>

      </Layout>

    )
  }

}

export default Service