import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  //   const { good, bad, neutral, total, positivePercentage } = this.props;
  return (
    <>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
