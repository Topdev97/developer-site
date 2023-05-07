import React from 'react'
import { ListOfLabels } from '../../components/ListOfLabels'
import { Link } from 'react-router-dom'

export const LabelsPage = () => {
  return (
    <div>

      <h3>Labels</h3>
      <Link className='btn--primary w-52' to={'/labels/create'}>Create Label</Link>
      <ListOfLabels />
    </div>
  )
}
