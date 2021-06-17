import { useFormikContext } from 'formik'
import React from 'react'
import { ErrorValidation } from './ErrorValidation';

interface FormGroupFechaProps {
  campo: string;
  label: string;
}

export const FormGroupFecha = ({ campo, label }: FormGroupFechaProps) => {

  const { values, validateForm, touched, errors } = useFormikContext<any>();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fecha = new Date(e.currentTarget.value + 'T00:00:00');
    values[campo] = fecha;
    validateForm();
  }

  return (
    <div className='form-group'>
      <label htmlFor={campo}>{label}</label>
      {
        touched[campo] && errors[campo]
          ? <ErrorValidation mensaje={errors[campo]?.toString()!} />
          : null
      }
      <input
        className='form-control'
        type='date'
        id={campo}
        name={campo}
        defaultValue={values[campo]?.toLocaleDateString('en-CA')}
        onChange={(e) => inputChange(e)}
      />
    </div>
  )
}
