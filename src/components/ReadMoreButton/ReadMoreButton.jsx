import React, { useState } from 'react'

const ReadMoreButton = ({descData}) => {
  let [visible,setVisible] = useState(false)
  let ReadMore = () => {
      setVisible(!visible)
  }
  return (
    <div>
        <p>
          {
            visible ? descData : null
          }
        </p>
        <button onClick={() => ReadMore()} className="btn btn-primary">
          Read More
        </button>
    </div>
  )
}

export default ReadMoreButton