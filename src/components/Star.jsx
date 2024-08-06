import React from 'react';

const Star = ({ filled }) => {
  return (
    <span style={{ color: filled ? '#FFA600' : '#e4e5e9' }}>
      &#9733;
    </span>
  );
};

export default Star;
