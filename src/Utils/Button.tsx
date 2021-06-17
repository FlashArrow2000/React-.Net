import React from 'react'

interface buttonProps{
  children: React.ReactNode;
  onClick?(): void;
  type: 'button' | 'submit';
  disabled: boolean;
  className: string;
}

export const Button = ({children, onClick, className, type, disabled }: buttonProps) => {
  return (
    <>
      <button type={ type } className={className} onClick={onClick} disabled={disabled} >{ children }</button>
    </>
  )
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: 'btn btn-primary'
}
