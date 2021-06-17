import { Field, useFormikContext } from 'formik';
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface FormGroupMarkdownProps {
  campo: string;
  label: string;
}

export const FormGroupMarkdown = ({ campo, label }: FormGroupMarkdownProps) => {

  const { values } = useFormikContext<any>()

  return (
    <div className='form-group form-markdown'>
      <div>
        <label>{label}</label>
        <div>
          <Field name={campo} as='textarea' classname='form-textarea' />
        </div>
      </div>
      <div>
        <label>{label} (preview)</label>
        <div className='markdown-container'>
          <ReactMarkdown>{values[campo]}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
