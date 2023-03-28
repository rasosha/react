import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class Checkbox extends React.Component<inputProps, inputState> {
  checkboxInput = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid(): boolean {
    if (this.checkboxInput.current) {
      return this.checkboxInput.current.checked;
    } else {
      return false;
    }
  }

  handleChange() {
    this.setState({
      isValid: this.isValid(),
      input: this.checkboxInput.current?.value,
    });
  }

  reset() {
    this.checkboxInput.current!.checked = false;
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <label>
        Confirm input:
        <input
          type="checkbox"
          name="myCheckbox"
          ref={this.checkboxInput}
          onChange={this.handleChange}
        />
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">You should confirm the input</div>
        )}
      </label>
    );
  }
}

export default Checkbox;
