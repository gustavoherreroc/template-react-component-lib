import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: { 
      options: ["1", "2", "3"],
      control: {
        type: "inline-radio"
      } 
    },
    variant: { 
      options: ["gray", "blue", "green", "red", "transparentWhite", "transparentBlack"],
      control: {
        type: "select"
      } 
    },
    state: { 
      options: ["active", "waiting"],
      control: {
        type: "inline-radio"
      } 
    },
    ghost: {
      control: {
        type: "boolean"
      } 
    },
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Button>;

const Template = (args) => <Button {...args}>Hello World</Button>;

export const Default = Template.bind({});
Default.args = {
  size: '1',
  variant: 'gray',
  ghost: false,
  state: 'active',
};

