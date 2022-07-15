import React from 'react'

const Square = ({val, click}) => {

  return (
        <button type='button' className='square' onClick={click}>{val}</button>    
  )
}

export default Square