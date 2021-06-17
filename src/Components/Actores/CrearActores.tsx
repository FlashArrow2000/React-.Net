import React from 'react'
import { FormularioActores } from './FormularioActores';

export const CrearActores = () => {
  return (
    <>
      <h3>Crear Actores</h3>
      <FormularioActores
        modelo={{
        nombre: '',
        fechaNacimiento: undefined,
        biografia: ''
        }}
        onSubmit={(valores, acciones) => {
          console.log(valores);
          console.log(acciones);
        } }
      />
    </>
  )
}
