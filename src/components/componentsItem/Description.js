import React from 'react'

const Description = (props) => {
  return (
    <div>
        <h3 className='title'>
        {props.title}
        </h3>
        <div className='description'>
            <span className='descriptionTitle'>
                <p className='parrafo'>
                    {props.parrafo}
                </p>
            </span>

        </div>
        <span className='cantidad'>
           <p>{props.cantidad}</p> 
        </span>
        <span className='precio'>
        ${props.precio}
        </span>
    </div>
  )
}

export default Description;