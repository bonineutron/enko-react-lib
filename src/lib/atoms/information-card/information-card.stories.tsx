import { InformationCard, InformationCardProps } from './information-card';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: InformationCard,
  title: 'Atoms/Information Card'
} as Meta;

const Template: Story<InformationCardProps> = (args) => <InformationCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  image: 'https://d9q73uveprt4n.cloudfront.net/games/Enko_Assets/Homepage_Images/Course_general/promo_gray.svg',
  text: 'Dirigir mejor tu negocio',
  background: '#EDEDED'
} as InformationCardProps;
