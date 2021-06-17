import { Pelicula } from '../../Models/Peliculas/peliculas.model';

interface PeliculaIndividualProps{
  pelicula: Pelicula;
}

export const PeliculaIndividual = ({ pelicula }: PeliculaIndividualProps) => {
  
  const construirLink = () => `/pelicula/${pelicula.id}`;

  return (
    <div className='div'>
      <a href={construirLink()}>
        <img
          src={pelicula.poster}
          alt={pelicula.title}
        />
      </a>
      <p>
        <a href={construirLink()}>{ pelicula.title }</a>
      </p> 
    </div>
  )
}
