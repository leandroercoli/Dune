export type Planet = {
  id: number;
  name: string;
  quote: string;
  day_length: number;
  environment: string;
  img: string;
};

export type PlanetCollection = {
  [key: string]: Planet;
};
