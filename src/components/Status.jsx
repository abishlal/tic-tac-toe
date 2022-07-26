import React from 'react';

const Status = ({ winner, current }) => {
  const nomoves = current.board.every(el => el != null);
  return (
    // const message = winner
    // ? `winner is ${winner}`
    // : `Next player is ${current.isXnext ? 'X' : 'O'}`;
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'x' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !nomoves && (
        <>
          Next Player is{' '}
          <span
            className={current.isXnext === 'x' ? 'text-green' : 'text-orange'}
          >
            {current.isXnext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && nomoves && (
        <>
          <span className='text-green'>X </span>
          and
          <span className='text-orange'> O</span> are tied
        </>
      )}
    </div>
  );
};

export default Status;
