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

export interface FormProps {
  showErrors: boolean;
  modal: boolean;
  cards: ICard[];
}

export interface inputProps {
  showErrors: boolean;
}

export interface inputState {
  isValid?: boolean;
  input?: string | undefined;
  checked?: boolean;
}
