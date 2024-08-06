import React from 'react'

const Card = ({children}) => {
  return (
    <div className='card custom-card'>
        <div className="card-body">
        {children}
        </div>
    </div>
  )
}

export default Card