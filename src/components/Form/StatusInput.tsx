import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class StatusInput extends React.Component<inputProps, inputState> {
  statusInput = React.createRef<HTMLSelectElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    const statusInput = this.statusInput.current?.value;
    return this.statusInput.current
      ? statusInput === 'alive' || statusInput === 'dead' || statusInput === 'unknown'
      : false;
  }

  handleChange() {
    this.setState({
      ...this.state,
      isValid: this.isValid(),
      input: this.statusInput.current?.value,
    });
  }

  reset() {
    this.statusInput.current!.value = '';
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <label>
        Status:
        <select defaultValue={''} name="status" ref={this.statusInput} onChange={this.handleChange}>
          <option value="" disabled>
            -------
          </option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">{`Select character's status`}</div>
        )}
      </label>
    );
  }
}

export default StatusInput;
