import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class GenderInput extends React.Component<inputProps, inputState> {
  genderInputMale = React.createRef<HTMLInputElement>();
  genderInputFemale = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    return (
      this.genderInputMale.current?.checked || this.genderInputFemale.current?.checked || false
    );
  }

  handleChange() {
    this.setState({
      ...this.state,
      isValid: this.isValid(),
      input: this.genderInputMale.current?.checked
        ? this.genderInputMale.current?.value
        : this.genderInputFemale.current?.checked
        ? this.genderInputFemale.current?.value
        : undefined,
    });
  }

  reset() {
    this.genderInputMale.current!.checked = false;
    this.genderInputFemale.current!.checked = false;
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            ref={this.genderInputMale}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            ref={this.genderInputFemale}
            onChange={this.handleChange}
          />
          Female
        </label>
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">{`Choose character's gender`}</div>
        )}
      </div>
    );
  }
}

export default GenderInput;
