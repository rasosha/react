import React from 'react';
import { FormProps } from '../types/types';
import Cards from '../components/Cards';
import NameInput from '../components/Form/NameInput';
import SpeciesInput from '../components/Form/SpeciesInput';
import GenderInput from '../components/Form/GenderInput';
import StatusInput from '../components/Form/StatusInput';
import DateInput from '../components/Form/DateInput';
import Checkbox from '../components/Form/Checkbox';
import FileInput from '../components/Form/FileInput';

export class FormPage extends React.Component<object, FormProps> {
  formInput = React.createRef<HTMLFormElement>();
  fileRef = React.createRef<FileInput>();
  speciesRef = React.createRef<SpeciesInput>();
  genderRef = React.createRef<GenderInput>();
  dateRef = React.createRef<DateInput>();
  checkboxRef = React.createRef<Checkbox>();
  statusRef = React.createRef<StatusInput>();
  nameRef = React.createRef<NameInput>();

  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      modal: false,
      showErrors: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  isFormValid() {
    const isValid =
      this.fileRef.current?.state?.isValid &&
      this.nameRef.current?.state?.isValid &&
      this.speciesRef.current?.state?.isValid &&
      this.statusRef.current?.state?.isValid &&
      this.genderRef.current?.state.isValid &&
      this.dateRef.current?.state?.isValid &&
      this.checkboxRef.current?.state?.isValid;
    return isValid;
  }

  handleReset() {
    this.fileRef.current?.reset();
    this.nameRef.current?.reset();
    this.speciesRef.current?.reset();
    this.statusRef.current?.reset();
    this.genderRef.current?.reset();
    this.dateRef.current?.reset();
    this.checkboxRef.current?.reset();
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    if (this.isFormValid()) {
      const cards = [...this.state.cards];
      cards.push({
        id: cards.length,
        image: this.fileRef.current?.state?.input,
        name: this.nameRef.current?.state?.input,
        species: this.speciesRef.current?.state?.input,
        status: this.statusRef.current?.state?.input,
        gender: this.genderRef.current?.state.input,
        created: this.dateRef.current?.state?.input,
      });
      this.setState({
        ...this.state,
        cards,
        modal: true,
        showErrors: false,
      });
      this.formInput.current?.reset();
      this.isFormValid();
    } else {
      console.log('Form is not valid!');
      this.setState({
        ...this.state,
        showErrors: true,
      });
    }
  }

  render(): React.ReactNode {
    document.title = 'Form Page';
    return (
      <main className="mainForm" data-testid="FormPage">
        <form
          className={'form'}
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          ref={this.formInput}
        >
          <NameInput showErrors={this.state.showErrors} ref={this.nameRef} />
          <SpeciesInput showErrors={this.state.showErrors} ref={this.speciesRef} />
          <GenderInput showErrors={this.state.showErrors} ref={this.genderRef} />
          <StatusInput showErrors={this.state.showErrors} ref={this.statusRef} />
          <DateInput showErrors={this.state.showErrors} ref={this.dateRef} />
          <FileInput showErrors={this.state.showErrors} ref={this.fileRef} />
          <Checkbox showErrors={this.state.showErrors} ref={this.checkboxRef} />
          <button type="submit">Submit!</button>
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
