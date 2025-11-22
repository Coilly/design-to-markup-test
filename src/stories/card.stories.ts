/* eslint-disable react/no-children-prop */
import Card from '@/components/Card/Card';
import Text from '@/components/Text/Text';
import { CardItem } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCard: CardItem = {
  id: '1',
  label: React.createElement(Text, { as: 'p', variant: 'heading2', children: '과제용 카드' }),
  content: React.createElement(Text, { as: 'p', variant: 'paragraph', children: '인터렉션, 코드 구조등을 자유롭게 구현하세요.' }),
  imgSrc: 'image/img_card.png',
  ariaLabel: '카드 이미지',
};

export const Default: Story = {
  args: {
    item: sampleCard,
    imgHeight: 460,
  },
};
