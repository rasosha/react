import React from 'react';
import { FormProps } from '../../types/types';

export function Checkbox(props: FormProps) {
  return (
    <label>
      Confirm input:
      <input
        {...props.register('Checkbox', {
          required: {
            value: true,
            message: 'You should confirm',
          },
        })}
        type="checkbox"
      />
      {props.errors.Checkbox && <p className="error-msg">{props.errors.Checkbox.message}</p>}
    </label>
  );
}
