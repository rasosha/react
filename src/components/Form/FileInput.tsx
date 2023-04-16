import React from 'react';
import { FormProps } from '../../types/types';

export function FileInput(props: FormProps) {
  // console.log(props);
  return (
    <label>
      Upload file:
      <input
        {...props.register('FileInput', {
          required: {
            value: true,
            message: 'select something',
          },
        })}
        type="file"
        accept="image/jpeg"
      />
      {props.errors.FileInput && <p className="error-msg">{props.errors.FileInput.message}</p>}
    </label>
  );
}
