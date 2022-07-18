import React from 'react'

const Square = ({val, click, isWinningSquare}) => {

  return (
        <button type='button' className={`square ${isWinningSquare ? 'winning' : ''} ${val === 'x' ? 'text-green' : 'text-orange'}`} onClick={click}>{val}  </button>    
  )
}

export default Square