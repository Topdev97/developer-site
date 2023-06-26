import React, { useContext, useState } from 'react'
import { Label } from '../../models/label.model'
import { labelService } from '../../services/label.service'
import { AuthContext } from '../../context/AuthContext'
import { useGetLabels } from '../ListOfLabels'
import { Link } from 'react-router-dom'
import { ButtonLoader } from '../ButtonLoader'
import './style.css'
type LabelProps = {
    data:Label,
    getLabels:any
    setFilteredLabels:any,
    filteredLabels:Label[]
}

export const LabelItem = ({data: label,setFilteredLabels,filteredLabels}:LabelProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {token} = useContext(AuthContext)
    // const {getLabels} = useGetLabels()
 
    const handleDelete = async () => {
        setLoading(true);
        try {
          await labelService.deleteLabel(token as string,label.id);
          setFilteredLabels(filteredLabels.filter((item)=> item.id !== label.id))
          // await getLabels()
          setError(null)
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      };
      return (
        <div className="labels-list__item" key={label.id}>
          <h6>{label.id}</h6>
          <h6>{label.title}</h6>
          <h6>{label.type}</h6>
          <div>
            <img style={{width:40}} src={label.image} alt={label.title} />
          </div>
          <h6>{`${label.createdAt}`}</h6>
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
