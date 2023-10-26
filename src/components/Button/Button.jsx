import { useState } from 'react'
import '../Card/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({data}) => {
  let [visible,setVisible] = useState(false)
  let makeVisible = (title) => {
    setVisible(!visible)
    if(!visible){
      alert(title + " favorilere elave olundu")
    }
  }
  return (
    <div>
          <button style={{background:visible ? "green" : "rgb(68, 0, 255)"}} onClick={() => makeVisible(data.Title)} className='favButton'>
               {
                visible ? "Remove Fav" : "Add Fav"
               } 
          </button>
    </div>
  )
}

export default Button