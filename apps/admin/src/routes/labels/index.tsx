import React from 'react'
import { ListOfLabels } from '../../components/ListOfLabels'
import { Link } from 'react-router-dom'

export const LabelsPage = () => {
  return (
    <div>

      <h1>LabelsPage</h1>
      <Link to={'/labels/create'}>Create Label</Link>
      <ListOfLabels />
    </div>
  )
}
