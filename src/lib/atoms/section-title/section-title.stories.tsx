import { SectionTitle, SectionTitleProps } from './section-title';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: SectionTitle,
  title: 'Atoms/Section Title'
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Con Enko aprenderás a'
} as SectionTitleProps;
