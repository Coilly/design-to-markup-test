import HeaderGnb from '@/components/Header/HeaderGnb';
import { GnbData } from '@/types/data';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/HeaderGnb',
  component: HeaderGnb,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeaderGnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gnbs: GnbData,
  },
};

