import React from 'react';

const History = ({ history, moveto, currentmove }) => {
  return (
    <div className='history-wrapper'>
      <ul className='history'>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                style={{ fontWeight: move === currentmove ? 'bold' : 'normal' }}
                className={`btn-move ${move === currentmove ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  moveto(move);
                }}
              >
                {move === 0 ? 'Go to start' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
