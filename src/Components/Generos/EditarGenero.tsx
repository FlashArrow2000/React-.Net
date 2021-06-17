import React from 'react'
import { useParams } from 'react-router-dom'
import { FormularioGeneros } from './FormularioGeneros'

export const EditarGenero = () => {

  //Hook de React-Router
  const { id }:any = useParams()

  return (
    <>
      <h3>Editar Genero</h3>

      <FormularioGeneros
        modelo={{ nombre: 'Accion' }}
        onSubmit={
          (valores, acciones) => {
            console.log(valores);
            acciones.resetForm();
          }
        }
      />
      
    </>
  )
}
