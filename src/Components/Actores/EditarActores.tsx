import React from 'react'
import { FormularioActores } from './FormularioActores';

export const EditarActores = () => {
  return (
    <>
      <h3>Editar Actores</h3>
      <FormularioActores
        modelo={{
          nombre: 'Daniel',
          fechaNacimiento: new Date('1996-06-01T00:00:00'),
          fotoURL: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg',
          biografia:`# Tom
Ha nacido ***Tom***`
        }}
        onSubmit={(valores, acciones) => {
          console.log(valores);
        }}
      />
    </>
  )
}
