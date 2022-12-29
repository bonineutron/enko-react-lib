import React from 'react';

export type ButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ label, onClick }: ButtonProps): JSX.Element {
  return (
    <button type='button' onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
