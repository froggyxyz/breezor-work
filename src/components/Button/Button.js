import React from 'react';
import './Button.scss';

const Button = ({ btnClass, text }) => {
  return <button className={'btn btn-' + btnClass}>{text}</button>;
};

export default Button;
