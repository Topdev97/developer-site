import React, { useContext, useState } from 'react'
import { Label } from '../../models/label.model'
import { labelService } from '../../services/label.service'
import { AuthContext } from '../../context/AuthContext'
import { useGetLabels } from '../ListOfLabels'
import { Link } from 'react-router-dom'
import { ButtonLoader } from '../ButtonLoader'
import './style.css'
type LabelProps = {
    label:Label,
    getLabels:any
}

export const LabelItem = ({label}:LabelProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {token} = useContext(AuthContext)
    // const {getLabels} = useGetLabels()
 
    const handleDelete = async () => {
        setLoading(true);
        try {
          await labelService.deleteLabel(token as string,label.id);
          
          // await getLabels()
          setError(null)
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      };
      return (
        <div className="labels-list__item" key={label.id}>
          <h4>{label.id}</h4>
          <h4>{label.title}</h4>
          <h4>{label.type}</h4>
          <div>
            <img style={{width:40}} src={label.image} alt={label.title} />
          </div>
          <h4>{`${label.createdAt}`}</h4>
          <div className="buttons">
            <button onClick={handleDelete}>{ loading ? <ButtonLoader /> : 'Delete' }</button>
            <Link to={`/labels/edit/${label.id}`}>Edit</Link>
          </div>
        </div>
      );
    
}
export const LabelSkeleton = () => {
  return (
    <div>LabelSkeleton</div>
  )
}
