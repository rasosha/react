import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ICard {
  id?: number;
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  image?: string;
  created?: string;
  origin?: {
    name?: string;
  };
  location?: {
    name?: string;
  };
}

export interface ICardsArr {
  cards: ICard[];
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

export interface FetchDataInfo {
  count?: number;
  pages?: number;
  next?: string | null;
  prev?: string | null;
}

export interface FetchData {
  info?: FetchDataInfo;
  results?: ICard[];
  error?: string;
}
