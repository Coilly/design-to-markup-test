import Img from '@/components/Img/Img';
import Tab from '@/components/Tab/Tab';
import Text from '@/components/Text/Text';
import { TabItem } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs: TabItem[] = [
  {
    id: '0',
    label: React.createElement(Text, { as: 'span', variant: 'heading2', children: '탭 영역 1' }),
    content: React.createElement(Img, { src: 'image/img_tab_1.png', alt: '탭 1 이미지' }),
  },
  {
    id: '1',
    label: React.createElement(Text, { as: 'span', variant: 'heading2', children: '탭 영역 2' }),
    content: React.createElement(Img, { src: 'image/img_tab_2.png', alt: '탭 2 이미지' }),
  },
  {
    id: '2',
    label: React.createElement(Text, { as: 'span', variant: 'heading2', children: '탭 영역 3' }),
    content: React.createElement(Img, { src: 'image/img_tab_3.png', alt: '탭 3 이미지' }),
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    defaultId: '0',
    variant: 'underline',
  },
};
