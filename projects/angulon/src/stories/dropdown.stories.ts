import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

import { DropdownComponent } from '../lib/dropdown/dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => ({
    props: args,
    template: `<ang-dropdown ${argsToTemplate(args)}></ang-dropdown>`,
  }),
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4 },
    ],
  },
};
