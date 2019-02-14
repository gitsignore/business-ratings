import React from 'react';
import PropTypes from 'prop-types';
import { scores } from '../../constants';

const ChipsNotation = ({ currentValue, action }) => {
  const value = Array.isArray(currentValue) ? currentValue : [currentValue];

  return (
    <div className="text-center m-2">
      {scores.map(note => (
        <span
          key={`note_${note.value}`}
          className={`chip ${value.includes(note.value) &&
            `bg-${note.color}`} c-hand`}
          role="button"
          tabIndex="0"
          onClick={() => action({ target: { id: 'score', value: note.value } })}
          onKeyPress={() =>
            action({ target: { id: 'score', value: note.value } })
          }
        >
          {note.value}
        </span>
      ))}
    </div>
  );
};

ChipsNotation.propTypes = {
  currentValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  action: PropTypes.func.isRequired
};

ChipsNotation.defaultProps = {
  currentValue: null
};

export default ChipsNotation;
