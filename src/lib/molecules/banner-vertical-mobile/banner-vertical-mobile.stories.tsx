import { BannerVerticalMobile, BannerVerticalMobileProps } from './banner-vertical-mobile';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: BannerVerticalMobile,
  title: 'Molecules/Banner Vertical Mobile'
} as Meta;

const Template: Story<BannerVerticalMobileProps> = (args) => <BannerVerticalMobile {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  background: '#A569BD',
  logo: 'https://d9q73uveprt4n.cloudfront.net/games/Enko_Assets/Logos/logo-enko-white.png',
  image: 'https://d9q73uveprt4n.cloudfront.net/games/Enko_Assets/Homepage_Images/principal_image.jpg',
  title: '¡Hoy decido hacer crecer mi negocio!',
  subTitle: 'Enko es una plataforma en línea con cursos 100% gratuitos para impulsar negocios como el tuyo',
  labelSignupButton: 'Regístrate gratis',
  labelLoginButton: 'Ingresa aquí',
  subTitleButtons: '¿Ya tienes tu cuenta?',
  onClickSignUp: () => console.log('test signup'),
  onClickLogin: () => console.log('test login')
} as BannerVerticalMobileProps;
