import React from 'react';
import { inputProps, inputState } from '../../types/types';

class NameInput extends React.Component<inputProps, inputState> {
  nameInput = React.createRef<HTMLInputElement>();
  constructor(props: inputProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    return this.nameInput.current ? /^(\b[A-Z]\w*\s*)+$/.test(this.nameInput.current.value) : false;
  }

  handleChange = async () => {
    {
      await this.setState({
        ...this.state,
        isValid: this.isValid(),
        input: this.nameInput.current?.value,
      });
      document.title = 'Card: ' + this.nameInput.current?.value || '';
    }
  };

  reset() {
    this.nameInput.current!.value = '';
    this.handleChange();
  }

  render(): React.ReactNode {
    return (
      <label>
        Name:
        <input
          name="name"
          placeholder="Character name"
          ref={this.nameInput}
          onChange={this.handleChange}
        />
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">Name should start with a capital letter</div>
        )}
      </label>
    );
  }
}

export default NameInput;
