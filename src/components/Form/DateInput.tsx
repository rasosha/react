import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class DateInput extends React.Component<inputProps, inputState> {
  dateInput = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    const today = new Date(Date.now());
    const input = this.dateInput.current?.value.toString();
    if (input) {
      return (
        `${today.getFullYear()}-${
          today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1
        }-${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}` >= input
      );
    } else return false;
  }

  handleChange() {
    this.setState({
      ...this.state,
      isValid: this.isValid(),
      input: this.dateInput.current?.value,
    });
  }

  reset() {
    this.dateInput.current!.value = '';
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <label>
        Created at:
        <input type="date" name="date" ref={this.dateInput} onChange={this.handleChange} />
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">Date should not be greater then the current date</div>
        )}
      </label>
    );
  }
}

export default DateInput;
