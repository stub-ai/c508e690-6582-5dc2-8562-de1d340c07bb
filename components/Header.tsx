import React from 'react';
import ReactTooltip from 'react-tooltip';

const Header = () => {
  return (
    <header>
      <button data-tip="This is a tooltip" id="my-button">Hover me</button>
      <ReactTooltip />
    </header>
  );
};

export default Header;