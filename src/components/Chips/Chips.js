import React, { useState } from 'react';
import './Chips.scss';

const chips = [
  { id: 1, chip: 'Пляжи' },
  { id: 2, chip: 'Breezor Pass' },
  { id: 3, chip: 'Впечатления' },
  { id: 4, chip: 'Маршруты' },
];

const Chips = () => {
  const [isActive, setIsActive] = useState('');

  return (
    <div className="chips">
      {chips.map((chip) => (
        <button
          key={chip.id}
          className={
            isActive === chip.chip ? 'chips__btn active' : 'chips__btn'
          }
          onClick={() =>
            isActive !== chip.chip ? setIsActive(chip.chip) : setIsActive('')
          }
        >
          {chip.chip}
        </button>
      ))}
    </div>
  );
};

export default Chips;
