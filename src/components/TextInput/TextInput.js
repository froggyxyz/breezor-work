import React from 'react';
import { textInputIcon } from '../icons/icons';
import './TextInput.scss';

const TextInput = () => {
  return (
    <div className="textInput">
      <input
        autoFocus
        placeholder="Поиск по стране, региону, городу, название пляжа"
      />
      <img src={textInputIcon} alt="icon" />
    </div>
  );
};

export default TextInput;
