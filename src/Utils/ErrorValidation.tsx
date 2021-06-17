import React from 'react'

interface ErrorValidationProps {
  mensaje: string;
}

export const ErrorValidation = ({mensaje}:ErrorValidationProps) => {
  return (
    <>
      <div className="text-danger mb-1" role="alert">
        ¡{mensaje}!
      </div>
    </>
  )
}
