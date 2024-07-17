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
  },
  render: (args) => ({
    props: args,
    template: `<ang-button ${argsToTemplate(args)}>Click me</ang-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {};
