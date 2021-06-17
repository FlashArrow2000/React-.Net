import { Button } from '../../Utils/Button';
import { Formik, Form, FormikHelpers } from 'formik';
import { FromGroupText } from '../../Utils/FromGroupText';
import { generoCreacionDTO } from '../../Models/Generos/generos.model';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import React from 'react'

interface FormularioGenerosProps {
  modelo: generoCreacionDTO;
  onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}

export const FormularioGeneros = ({modelo, onSubmit}: FormularioGenerosProps) => {
  return (
    <>
       <Formik
        initialValues={ modelo }
        onSubmit={ onSubmit }
        validationSchema={
          Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
          })
        }
      >

        {
          (formikProps) => (
            // <Form></Form> es de formik
            < Form >

              <FromGroupText campo='nombre' label='Nombre' placeholder='Escribe aquí el género' />

              <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>

              <Link className='btn btn-secondary' to='/generos'>Volver</Link>

            </Form>

          )
        }

      </Formik>
    </>
  )
}
