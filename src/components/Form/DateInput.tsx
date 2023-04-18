import React from 'react';
import { FormProps } from '../../types/types';

export function DateInput(props: FormProps) {
  return (
    <label>
      Created at:
      <input
        {...props.register('DateInput', {
          required: {
            value: true,
            message: 'select date',
          },
          max: {
            value: '2023-20-04',
            message: 'Date should be less than 20.04.2023',
          },
        })}
        type="date"
        value={props.testMode ? '2023-04-20' : ''}
      />
      {props.errors.DateInput && <p className="error-msg">{props.errors.DateInput.message}</p>}
    </label>
  );
}
