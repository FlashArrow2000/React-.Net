import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ErrorValidation } from './ErrorValidation';

interface FormGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string;
}


export const FromGroupText = ({ campo, label, placeholder }: FormGroupTextProps) => {
  return (
    <>
      <div className='from-group mb-3'>
        {label ? <label htmlFor={campo}>{label}</label> : null}
        <ErrorMessage name={campo}>
          {mensaje => <ErrorValidation mensaje={mensaje} />}
        </ErrorMessage>
        <Field name={campo} className='form-control' placeholder={placeholder} autoComplete='off'/>
        {/* <Field /> es de formik, el name debe de ser el de initialValues */}
      </div>
    </>
  )
}
