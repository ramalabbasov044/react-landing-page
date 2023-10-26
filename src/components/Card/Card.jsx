import { useState } from 'react'
import './Card.css'
import Button from '../Button/Button'
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton'
const Card = ({ movieData }) => {
  let [data,setData] = useState(movieData.Search)

  return (
    <div className="cardBody">
        {
            data.map((item) => 
                <div key={item.Year} className="card" >
                    <Button data={item} />
                    <img src={item.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
                    <p className="card-text">{item.Year}</p>
                        <ReadMoreButton descData={item.description} />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Card