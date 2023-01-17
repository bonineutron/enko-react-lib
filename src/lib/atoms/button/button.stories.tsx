import { Button, ButtonProps } from './button';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: Button,
  title: 'Atoms/Button'
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: 'Button Test',
  height: '50px',
  width: '200px',
  onClick: () => console.log('test')
} as ButtonProps;
