import React, { useEffect, useState } from 'react'
import { landingPageDTO } from '../../Models/Peliculas/peliculas.model';
import { ListadoPeliculas } from './ListadoPeliculas';

export const LandingPage = () => {

  const [{ enCartelera, proximosEstrenos }, setPeliculas] = useState<landingPageDTO>({})

  useEffect(() => {
    const timeId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://i.redd.it/l8z673yg8em51.jpg'
          },
          {
            id: 2,
            title: 'Moana',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg'
          },
        ],
        proximosEstrenos: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_QL75_UX190_CR0,0,190,281_.jpg'
          },
        ]
      })
    }, 500);
    return () => {
      clearTimeout(timeId)
    }
  }, [])


  return (
    <>
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={enCartelera} />
      <h3>Próximos Estrenos</h3>
      <ListadoPeliculas peliculas={proximosEstrenos} />
    </>
  )
}
