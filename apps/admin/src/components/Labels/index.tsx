import React from 'react'
import { useGetLabels } from '../../hooks/useGetLabels'
import { Link } from 'react-router-dom'
import { labelService } from '../../api/labels'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const Labels = () => {
  const [token,setToken] = useLocalStorage('token',null)
  const {loading,error,labels}  = useGetLabels()
  return (
    <div >
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {labels.map((label)=>{
        const handleDelete = async () => {
          await labelService.deleteLabel(token,label.id)
        }
        return (
          <div key={label.id}>
            <h4>{label.title}</h4>
            <h4>{label.type}</h4>
            <div className="buttons">
              <button onClick={handleDelete}>Delete</button>
              <Link to={`/labels/edit/${label.id}`}>Edit</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
