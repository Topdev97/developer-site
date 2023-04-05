import React from 'react'
import { LabelForm } from '../../components/LabelForm'
import { useParams } from 'react-router-dom'
import { useGetSingleLabel } from '../../hooks/useGetSingleLabel'

export const EditLabelPage = () => {
  const {id} = useParams()
  console.log(id);
  
  const {label,loading,error} = useGetSingleLabel(id as string)

  return (
    <>
      {loading && <p>Loading</p>}

      {error && <p>{error}</p>}
      {!loading && <LabelForm data={label}/>}
    </>
  )
}
