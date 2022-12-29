import React from 'react';

export type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps): JSX.Element {
  return <button onClick={() => console.log('test')}>{label}</button>;
}

export default Button;
