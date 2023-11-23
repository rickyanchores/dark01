import React from 'react'

const Card = ({image,text}) => {
  return (
    <div className='Card'>
        <img src={image} alt="image" />
        <h3>{text}</h3>
    </div>
  )
}

export default Card;