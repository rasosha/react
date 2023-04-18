import React from 'react';
import { FormProps } from '../../types/types';

export function GenderInput(props: FormProps) {
  return (
    <div>
      Gender:
      <label>
        <input
          {...props.register('GenderInput', {
            required: {
              value: true,
              message: 'select something',
            },
          })}
          autoComplete="off"
          type="radio"
          value="male"
          checked={props.testMode ? true : false}
        />
        Male
      </label>
      <label>
        <input {...props.register('GenderInput')} type="radio" value="female" />
        Female
      </label>
      {props.errors.GenderInput && <p className="error-msg">{props.errors.GenderInput.message}</p>}
    </div>
  );
}
