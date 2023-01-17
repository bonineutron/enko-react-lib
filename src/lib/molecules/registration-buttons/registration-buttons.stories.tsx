import { RegistrationButtons, RegistrationButtonsProps } from './registration-buttons';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: RegistrationButtons,
  title: 'Molecules/Registration Buttons'
} as Meta;

const Template: Story<RegistrationButtonsProps> = (args) => <RegistrationButtons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  labelSignup: 'Regístrate gratis',
  labelLogin: 'Ingresa aquí',
  subTitle: '¿Ya tienes tu cuenta?',
  backgroundSignup: '#F98232',
  backgroundLogin: '#A569BD',
  darkBackground: false,
  onClickSignUp: () => console.log('test signup'),
  onClickLogin: () => console.log('test login')
} as RegistrationButtonsProps;
