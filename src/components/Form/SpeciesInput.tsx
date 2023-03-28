import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class SpeciesInput extends React.Component<inputProps, inputState> {
  speciesInput = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    if (this.speciesInput.current) {
      const str = this.speciesInput.current?.value.toLowerCase();
      return str === 'human' || str === 'animal' || str === 'unknown';
    } else return false;
  }

  handleChange() {
    this.setState({
      ...this.state,
      isValid: this.isValid(),
      input: this.speciesInput.current?.value,
    });
  }

  reset() {
    this.speciesInput.current!.value = '';
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <label>
        Species:
        <input
          name="species"
          placeholder="human, animal or unknown"
          ref={this.speciesInput}
          onChange={this.handleChange}
        />
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">Character can be human, animal or unknown</div>
        )}
      </label>
    );
  }
}

export default SpeciesInput;
