import styles from './button.module.scss';

export type ButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ label, onClick }: ButtonProps): JSX.Element {
  return (
    <button type='button' onClick={onClick} className={`${styles.button} p-10 text-white rounded-md`}>
      {label}
    </button>
  );
}
