import { Pelicula } from '../../Models/Peliculas/peliculas.model'
import { PeliculaIndividual } from './PeliculaIndividual';
import ListadoGenerico from '../../Utils/ListadoGenerico';

interface listadoPeliculaProps {
  peliculas?: Pelicula[];
}

export const ListadoPeliculas = ({peliculas}: listadoPeliculaProps) => {

  return (
    <ListadoGenerico listado={peliculas}>
        <div className='div__listado'>
          {peliculas?.map((pelicula) =>
              <PeliculaIndividual
                pelicula={pelicula}
                key={pelicula.id}
              />)}
        </div>
    </ListadoGenerico>
  )
}

