import React from 'react'

const Crad = (props) => {

  console.log(props); //printing properties
  return (
  
    <div>
       <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

<button>View Details</button>
      </div>
    </div>
  )
}

export default Crad;