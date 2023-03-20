export interface ICard {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
}
