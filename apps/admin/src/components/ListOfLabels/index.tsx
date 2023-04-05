import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { labelService } from '../../services/label.service'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Label } from '../../models/project.model'
export const ListOfLabels = () => {
  const [token,setToken] = useLocalStorage('token',null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [labels, setLabels] = useState<Label[]>([])

  React.useEffect(()=>{
      const getLabels = async () => {
          
          setLoading(true)
          try {
              
              const data = await labelService.getLabels()
              setLabels(data)
          } catch (error) {
              setError(`${error}`)

          }
          setLoading(false)
      }
      getLabels()
  },[])

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
