export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  created: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
}

export interface IResult {
  info: IInfo;
  results: ICharacter[];
}
