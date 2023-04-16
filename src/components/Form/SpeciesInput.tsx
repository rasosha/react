import React from 'react';
import { FormProps } from '../../types/types';

export function SpeciesInput(props: FormProps) {
  return (
    <label>
      Species:
      <input
        {...props.register('SpeciesInput', {
          required: {
            value: true,
            message: 'write something',
          },
          pattern: {
            value: /^human|^animal|^unknown/gm,
            message: 'Species should be human, animal or unknown',
          },
        })}
        autoComplete="off"
        placeholder="human, animal or unknown"
        value={'human'}
      />
      {props.errors.SpeciesInput && (
        <p className="error-msg">{props.errors.SpeciesInput.message}</p>
      )}
    </label>
  );
}
