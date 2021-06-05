import React from 'react';
import './Button.css';

function Button(props) {
  const { variant, label } = props;
  
  return (
    <button className={`button ${variant}`}>
      {label}
    </button>
  )
}

export default Button