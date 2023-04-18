import React from 'react';
import { FormProps } from '../../types/types';

export function NameInput(props: FormProps) {
  return (
    <label>
      Name:
      <input
        {...props.register('NameInput', {
          required: {
            value: true,
            message: 'write something',
          },
          minLength: {
            value: 3,
            message: 'Name should be more than 2 characters',
          },
          pattern: {
            value: /^(\b[A-Z]\w*\s*)+$/,
            message: 'First letter should be capital',
          },
        })}
        autoComplete="off"
        placeholder="Character's name"
        defaultValue={props.testMode ? 'Test' : ''}
      />
      {props.errors.NameInput && <p className="error-msg">{props.errors.NameInput.message}</p>}
    </label>
  );
}
