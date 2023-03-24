import React from 'react'
import { Labels } from '../../components/Labels'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>

      <h1>LabelsPage</h1>
      <Link to={'/labels/create'}>Create Label</Link>
      <Labels />
    </div>
  )
}
