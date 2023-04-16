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
            value: '2023-04-04',
            message: 'Date should be less than 05.04.2023',
          },
        })}
        type="date"
      />
      {props.errors.DateInput && <p className="error-msg">{props.errors.DateInput.message}</p>}
    </label>
  );
}
