import React from 'react';
import { FormProps } from '../types/types';
import Cards from '../components/Cards';

export class FormPage extends React.Component<object, FormProps> {
  formInput = React.createRef<HTMLFormElement>();
  nameInput = React.createRef<HTMLInputElement>();
  fileInput = React.createRef<HTMLInputElement>();
  speciesInput = React.createRef<HTMLInputElement>();
  genderInputMale = React.createRef<HTMLInputElement>();
  genderInputFemale = React.createRef<HTMLInputElement>();
  dateInput = React.createRef<HTMLInputElement>();
  checkboxInput = React.createRef<HTMLInputElement>();
  statusInput = React.createRef<HTMLSelectElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      modal: false,
      showErrors: false,
      isValid: {
        isNameValid: false,
        isSpeciesValid: false,
        isGenderValid: false,
        isStatusValid: false,
        isDateValid: false,
        isFileValid: false,
        isChecked: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isNameValid() {
    return this.nameInput.current ? /^(\b[A-Z]\w*\s*)+$/.test(this.nameInput.current.value) : false;
  }
  isSpeciesValid() {
    if (this.speciesInput.current) {
      const str = this.speciesInput.current?.value.toLowerCase();
      return str === 'human' || str === 'animal' || str === 'unknown';
    } else return false;
  }
  isGenderValid() {
    return (
      this.genderInputMale.current?.checked || this.genderInputFemale.current?.checked || false
    );
  }
  isStatusValid() {
    const statusInput = this.statusInput.current?.value;
    return this.statusInput.current
      ? statusInput === 'alive' || statusInput === 'dead' || statusInput === 'unknown'
      : false;
  }
  isDateValid() {
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
  isFileValid() {
    return this.fileInput.current ? this.fileInput.current.value.endsWith('.jpg') : false;
  }
  isChecked() {
    return this.checkboxInput.current ? this.checkboxInput.current.checked : false;
  }

  handleChange() {
    const isValid = {
      isNameValid: this.isNameValid(),
      isSpeciesValid: this.isSpeciesValid(),
      isGenderValid: this.isGenderValid(),
      isStatusValid: this.isStatusValid(),
      isDateValid: this.isDateValid(),
      isFileValid: this.isFileValid(),
      isChecked: this.isChecked(),
    };
    this.setState({
      ...this.state,
      isValid,
    });
    console.log('isValidAll:', isValid);
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    console.log(this.state);
    const isValid =
      this.state.isValid.isChecked &&
      this.state.isValid.isDateValid &&
      this.state.isValid.isFileValid &&
      this.state.isValid.isGenderValid &&
      this.state.isValid.isNameValid &&
      this.state.isValid.isSpeciesValid &&
      this.state.isValid.isStatusValid;
    if (isValid) {
      const cards = [...this.state.cards];
      cards.push({
        id: cards.length,
        image: this.fileInput.current ? URL.createObjectURL(this.fileInput.current!.files![0]) : '',
        name: this.nameInput.current?.value,
        species: this.speciesInput.current?.value,
        status: this.statusInput.current?.value,
        gender: this.genderInputMale.current?.checked
          ? this.genderInputMale.current?.value
          : this.genderInputFemale.current?.value,
        created: this.dateInput.current?.value,
      });
      this.setState({
        ...this.state,
        cards,
        modal: true,
        showErrors: false,
        isValid: {
          isNameValid: false,
          isSpeciesValid: false,
          isGenderValid: false,
          isStatusValid: false,
          isDateValid: false,
          isFileValid: false,
          isChecked: false,
        },
      });
      this.formInput.current?.reset();
      console.log('isValid!');
    } else {
      console.log('isNotValid!');
      this.setState({
        ...this.state,
        showErrors: true,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <main className="mainForm">
        <form
          className={'form'}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          // onReset={() => {
          //   this.setState({
          //     ...this.state,

          //   });
          // }}
          ref={this.formInput}
        >
          <label>
            Name:
            <input
              name="name"
              placeholder="Character name"
              ref={this.nameInput}
              onChange={this.handleChange}
            />
            {this.state.showErrors && !this.state.isValid.isNameValid && (
              <div className="error-msg">Name should start with a capital letter</div>
            )}
          </label>
          <label>
            Species:
            <input
              name="species"
              placeholder="human, animal or unknown"
              ref={this.speciesInput}
              onChange={this.handleChange}
            />
            {this.state.showErrors && !this.state.isValid.isSpeciesValid && (
              <div className="error-msg">Character can be human, animal or unknown</div>
            )}
          </label>
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
            {this.state.showErrors && !this.state.isValid.isGenderValid && (
              <div className="error-msg">{`Choose character's gender`}</div>
            )}
          </div>
          <label>
            Status:
            <select
              defaultValue={''}
              name="status"
              ref={this.statusInput}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                -------
              </option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            {this.state.showErrors && !this.state.isValid.isStatusValid && (
              <div className="error-msg">{`Select character's status`}</div>
            )}
          </label>
          <label>
            Created at:
            <input type="date" name="date" ref={this.dateInput} onChange={this.handleChange} />
            {this.state.showErrors && !this.state.isValid.isDateValid && (
              <div className="error-msg">Date should not be greater then the current date</div>
            )}
          </label>
          <label>
            Upload file:
            <input
              type="file"
              name="file"
              accept="image/jpeg"
              ref={this.fileInput}
              onChange={this.handleChange}
            />
            {this.state.showErrors && !this.state.isValid.isFileValid && (
              <div className="error-msg">{`Uploading file should have '.jpg' extention`}</div>
            )}
          </label>
          <label>
            Confirm input:
            <input
              type="checkbox"
              name="myCheckbox"
              ref={this.checkboxInput}
              onChange={this.handleChange}
            />
            {this.state.showErrors && !this.state.isValid.isChecked && (
              <div className="error-msg">You should confirm the input</div>
            )}
          </label>
          <button type="submit">Submit</button>
          {/* <button type="reset">Reset form</button> */}
        </form>
        {this.state.cards.length > 0 ? <Cards {...this.state} /> : ''}
        {this.state.modal ? (
          <div className="modal">
            <h2>Confirmation message:</h2>
            <p>Data has been saved!</p>
            <button onClick={() => this.setState({ modal: false })}>ok!</button>
          </div>
        ) : (
          ''
        )}
      </main>
    );
  }
}

export default FormPage;
