import React from 'react';
import icon from './img/icon.svg';
import './TextInput.scss';

const TextInput = () => {
  return (
    <div className="textInput">
      <input
        autoFocus
        placeholder="Поиск по стране, региону, городу, название пляжа"
      />
      <img src={icon} alt="icon" />
    </div>
  );
};

export default TextInput;
