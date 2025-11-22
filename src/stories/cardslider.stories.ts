/* eslint-disable react/no-children-prop */
import CardSlider from '@/components/CardSlider/CardSlider';
import Text from '@/components/Text/Text';
import { CardItem } from '@/types';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const meta = {
  title: 'Components/CardSlider',
  component: CardSlider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCards: CardItem[] = [
  {
    id: '0',
    label: React.createElement(Text, { as: 'p', variant: 'heading2', children: '과제용 카드' }),
    content: React.createElement(Text, { as: 'p', variant: 'paragraph', children: '인터렉션, 코드 구조등을 자유롭게 구현하세요.' }),
    imgSrc: 'image/img_card.png',
    ariaLabel: '1',
  },
  {
    id: '1',
    label: React.createElement(Text, { as: 'p', variant: 'heading2', children: '과제용 카드 (2줄 테스트)' }),
    content: React.createElement(Text, {
      as: 'p',
      variant: 'paragraph',
      children: '인터렉션, 코드 구조등을 자유롭게 구현하세요. 인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    }),
    imgSrc: 'image/img_card.png',
    ariaLabel: '2',
  },
  {
    id: '2',
    label: React.createElement(Text, { as: 'p', variant: 'heading2', children: '과제용 카드' }),
    content: React.createElement(Text, { as: 'p', variant: 'paragraph', children: '인터렉션, 코드 구조등을 자유롭게 구현하세요.' }),
    imgSrc: 'image/img_card.png',
    ariaLabel: '3',
  },
  {
    id: '3',
    label: React.createElement(Text, { as: 'p', variant: 'heading2', children: '과제용 카드' }),
    content: React.createElement(Text, { as: 'p', variant: 'paragraph', children: '인터렉션, 코드 구조등을 자유롭게 구현하세요.' }),
    imgSrc: 'image/img_card.png',
    ariaLabel: '4',
  },
];

export const Default: Story = {
  args: {
    cards: sampleCards,
    imgHeight: 460,
    className: 'card-slider',
  },
};

export const Mobile: Story = {
  args: {
    cards: sampleCards,
    imgHeight: 218,
    className: 'card-slider',
  },
};

