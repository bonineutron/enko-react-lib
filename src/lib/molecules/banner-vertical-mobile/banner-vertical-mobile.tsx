import { RegistrationButtons } from '../registration-buttons/registration-buttons';
import { IoIosArrowDown } from 'react-icons/io';

export type BannerVerticalMobileProps = {
  background: string;
  logo: string;
  image: string;
  title: string;
  subTitle: string;
  labelSignupButton: string;
  labelLoginButton: string;
  subTitleButtons: string;
  customClass?: string;
  onClickSignUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickLogin: React.MouseEventHandler<HTMLButtonElement>;
};

export function BannerVerticalMobile({
  background,
  logo,
  image,
  title,
  subTitle,
  labelSignupButton,
  labelLoginButton,
  subTitleButtons,
  customClass,
  onClickSignUp,
  onClickLogin
}: BannerVerticalMobileProps): JSX.Element {
  return (
    <div
      className={`h-screen w-full flex flex-col items-center justify-between pt-14 pb-5 lg:flex-row lg:h-[450px] lg:justify-evenly lg:rounded-xl lg:pt-5 ${
        customClass || ''
      }`}
      style={{ background: background }}>
      <div className='flex flex-col items-center lg:min-w-[30%]'>
        <img src={logo} alt='logo-banner' className='h-[60px] mb-10 lg:mb-5' />
        <img src={image} alt='image-banner' className='w-[90%] max-w-[400px]' />
      </div>
      <div className='text-center text-white w-[90%] max-w-[500px] lg:min-w-[40%] lg:px-18'>
        <h1 className='font-bold text-[35px] leading-[40px]'>{title}</h1>
        <p className='my-[20px] lg:text-[18px]'>{subTitle}</p>
        <RegistrationButtons
          labelSignup={labelSignupButton}
          labelLogin={labelLoginButton}
          subTitle={subTitleButtons}
          backgroundSignup='#F98232'
          backgroundLogin='#FFF'
          textColorLogin='#A569BD'
          onClickSignUp={onClickSignUp}
          onClickLogin={onClickLogin}
          darkBackground
        />
      </div>
      <IoIosArrowDown className='text-white text-[40px] lg:hidden' />
    </div>
  );
}
