import React from 'react';

const ToggleButton = ({ toggleNav }) => {
  return (
    <button
      onClick={toggleNav}
      className="absolute p-2 rounded-lg top-4 right-4 glass glass-hover text-[var(--text-primary)]"
    >
      Toggle
    </button>
  );
};

export default ToggleButton;
