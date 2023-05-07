import React from 'react'
import { ListOfLabels } from '../../components/ListOfLabels'
import { Link } from 'react-router-dom'

export const LabelsPage = () => {
  return (
    <div className='flex flex-col'>

      <h3 style={{alignSelf:'center'}}>Labels</h3>
      <ListOfLabels />
    </div>
  )
}
