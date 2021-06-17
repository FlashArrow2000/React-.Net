export interface Pelicula {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  enCartelera?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}