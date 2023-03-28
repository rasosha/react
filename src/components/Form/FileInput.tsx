import React from 'react';
import { FormProps, inputProps, inputState } from '../../types/types';

class FileInput extends React.Component<inputProps, inputState> {
  fileInput = React.createRef<HTMLInputElement>();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isValid: false,
      input: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  isValid() {
    return this.fileInput.current ? this.fileInput.current.value.endsWith('.jpg') : false;
  }

  handleChange() {
    this.isValid();
    this.setState({
      ...this.state,
      isValid: this.isValid(),
      input: this.fileInput.current ? URL.createObjectURL(this.fileInput.current!.files![0]) : '',
    });
  }

  reset() {
    this.fileInput.current!.value = '';
  }

  render(): React.ReactNode {
    return (
      <label>
        Upload file:
        <input
          type="file"
          name="file"
          accept="image/jpeg"
          ref={this.fileInput}
          onChange={this.handleChange}
        />
        {this.props.showErrors && !this.state.isValid && (
          <div className="error-msg">{`Uploading file should have '.jpg' extention`}</div>
        )}
      </label>
    );
  }
}

export default FileInput;
