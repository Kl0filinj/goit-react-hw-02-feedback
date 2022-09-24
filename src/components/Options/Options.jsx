import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ onClick }) => {
  const onClickHandler = e => {
    onClick(e.target.dataset.name);
  };

  return (
    <>
      <button onClick={onClickHandler} data-name="good">
        Good
      </button>
      <button onClick={onClickHandler} data-name="bad">
        Bad
      </button>
      <button onClick={onClickHandler} data-name="neutral">
        Neutral
      </button>
    </>
  );
};

Options.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Options;
