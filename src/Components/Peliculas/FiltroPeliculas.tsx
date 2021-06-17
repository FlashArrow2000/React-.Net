import { Field, Form, Formik } from 'formik'
import React from 'react'
import { generoDTO } from '../../Models/Generos/generos.model';
import { Button } from '../../Utils/Button';

interface FiltroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEsternos: boolean;
  enCines: boolean;
}

export const FiltroPeliculas = () => {

  const initialValue: FiltroPeliculasForm = {
    titulo: '',
    generoId: 0,
    proximosEsternos: false,
    enCines: false
  }

  const generos: generoDTO[] = [
    { id: 1, nombre: 'Acción' },
    {id: 2, nombre: 'Comedia'}
  ]

  return (
    <>
      <h3>Filtro Peliculas</h3>

      <Formik
        initialValues={initialValue}
        onSubmit={(valores, acciones) => {
          console.log(valores);
        }}
      >
        {
          (formikProps) => (
            <Form>
              <div className="form-inline">
                <div className="form-group mb-2">
                  <label htmlFor="titulo" className="sr-only">Título</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    placeholder="Título de la pelicula"
                    autoComplete="off"
                    {...formikProps.getFieldProps("titulo")}
                  />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <select
                    className="form-control"
                    {...formikProps.getFieldProps('generoId')}
                  >
                    <option value="0">--Seleccione un género--</option>
                    {
                      generos.map(e => <option value={e.id} key={e.id}>{e.nombre}</option>)
                    }
                  </select>
                </div>
                <div className='form-group mx-sm-3 mb-2'>
                  <Field className='form-check-input' id='proximosEsternos' name='proximosEsternos' type='checkbox' />
                  <label htmlFor='proximosEsternos'>Próximos Estrenos</label>
                </div>
                <div className='form-group mx-sm-3 mb-2'>
                  <Field className='form-check-input' id='enCines' name='enCines' type='checkbox' />
                  <label htmlFor='enCines'>En Cines</label>
                </div>
                <Button
                  className='btn btn-primary mb-2 mx-sm-3'
                  onClick={ () => formikProps.submitForm() }
                >Filtrar</Button>
                <Button
                  className='btn btn-danger mb-2 '
                  onClick={ () => formikProps.setValues(initialValue) }
                >Limpiar</Button>
              </div>
            </Form>
          )
        }
      </Formik>

    </>
  )
}
