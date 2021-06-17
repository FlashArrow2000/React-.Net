import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { actorCreacionDTO } from '../../Models/Actores/actores.model';
import { FromGroupText } from '../../Utils/FromGroupText';
import { Button } from '../../Utils/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { FormGroupFecha } from '../../Utils/FormGroupFecha';
import { FormGroupImagen } from '../../Utils/FormGroupImagen';
import { FormGroupMarkdown } from '../../Utils/FormGroupMarkdown';

interface FormularioActoresProps {
  modelo: actorCreacionDTO;
  onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}

export const FormularioActores = ({modelo, onSubmit}: FormularioActoresProps) => {
  return (
    <>
      <Formik
        initialValues={modelo}
        onSubmit={onSubmit}
        validationSchema={
          Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
            fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
          })
        }
      >
        {
          (FormikProps) => (
            <Form>
              <FromGroupText campo='nombre' label='Nombre' />
              <FormGroupFecha label='Fecha Nacimiento' campo='fechaNacimiento' />
              <FormGroupImagen campo='foto' label='Foto' imagenURL={modelo.fotoURL} />
              <FormGroupMarkdown campo='biografia' label='Biografia' />
              <Button
                disabled={FormikProps.isSubmitting}
                type='submit'
              >
                Salvar
              </Button>
              <Link className='btn btn-secondary' to='/actores'>Cancelar</Link>
            </Form>
          )
        }
      </Formik>
    </>
  )
}
