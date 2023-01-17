import { Button } from '../../atoms/button/button';

export type RegistrationButtonsProps = {
  labelSignup: string;
  labelLogin: string;
  backgroundSignup: string;
  backgroundLogin: string;
  subTitle: string;
  textColorSignup?: string;
  textColorLogin?: string;
  darkBackground?: boolean;
  customClass?: string;
  onClickSignUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
};

export function RegistrationButtons({
  labelSignup,
  labelLogin,
  backgroundSignup,
  backgroundLogin,
  subTitle,
  textColorSignup,
  textColorLogin,
  darkBackground,
  customClass,
  onClickSignUp,
  onClickLogin
}: RegistrationButtonsProps): JSX.Element {
  return (
    <div className={`flex flex-col items-center ${darkBackground && 'text-white'} ${customClass || ''}`}>
      <Button
        content={labelSignup}
        onClick={onClickSignUp}
        background={backgroundSignup}
        textColor={textColorSignup || ''}
        height='60px'
        width='250px'
        customClass='rounded-md mb-[10px] text-[25px] font-semibold'
      />
      <p>{subTitle}</p>
      <Button
        content={labelLogin}
        onClick={onClickLogin}
        background={backgroundLogin}
        textColor={textColorLogin || ''}
        height='30px'
        width='150px'
        customClass='rounded-md mb-[5px] text-[16px] font-semibold'
      />
    </div>
  );
}
