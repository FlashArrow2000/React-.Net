import { FormularioGeneros } from './FormularioGeneros';
import { useHistory } from "react-router-dom"


export const CrearGenero = () => {

  //Hook de React-Router
  const history = useHistory();

  const redirect = () => {
    history.push('/generos')
  }

  return (
    <>
      <h3>Crear Genero</h3>

      <FormularioGeneros
        modelo={{ nombre: '' }}
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
