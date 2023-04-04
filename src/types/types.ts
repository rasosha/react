import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ICard {
  id?: number;
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  image?: string;
  created?: string;
}

export interface FormProps {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
}

export interface FormInputs {
  NameInput: string;
  SpeciesInput: string;
  GenderInput: string;
  StatusInput: string;
  DateInput: string;
  FileInput: string;
  Checkbox: string;
}

export interface FetchData {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: ICard[];
  error?: string;
}
