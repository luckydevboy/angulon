import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

import { ButtonComponent } from '../lib/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'soft'],
      control: { type: 'select' },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
  },
  render: (args) => ({
    props: args,
    template: `<ang-button ${argsToTemplate(args)}>Click me</ang-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
  },
};

export const WithIcon: Story = {
  args: {
    iconPosition: "end",

    icon: `
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>

    `,

    variant: "soft"
  },
};
