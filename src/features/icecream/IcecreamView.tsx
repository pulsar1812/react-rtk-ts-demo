import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <label>Restock Amount: </label>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};
