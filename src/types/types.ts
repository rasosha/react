/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ICard {
  id?: number;
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  image?: string;
  created?: string;
}

export interface IProps {}
export interface IState {}

export interface FormProps {
  showErrors: boolean;
  modal: boolean;
  isValid: {
    isNameValid: boolean;
    isSpeciesValid: boolean;
    isGenderValid: boolean;
    isStatusValid: boolean;
    isDateValid: boolean;
    isFileValid: boolean;
    isChecked: boolean;
  };
  cards: ICard[];
}
