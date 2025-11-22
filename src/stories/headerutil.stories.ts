import HeaderUtil from '@/components/Header/HeaderUtil';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/HeaderUtil',
  component: HeaderUtil,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderUtil>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

