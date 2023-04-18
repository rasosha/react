import React from 'react';
import { FormProps } from '../../types/types';

export function StatusInput(props: FormProps) {
  return (
    <label>
      Status:
      <select
        {...props.register('StatusInput', {
          required: {
            value: true,
            message: 'select something',
          },
        })}
        defaultValue={'alive'}
        // defaultValue={''}
      >
        <option value="" disabled>
          -------
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      {props.errors.StatusInput && <p className="error-msg">{props.errors.StatusInput.message}</p>}
    </label>
  );
}
