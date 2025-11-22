/* eslint-disable react/no-children-prop */
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bg:'darkGreen',
    variant: 'M',
    children: React.createElement(Text, { as: 'span', variant: 'body1', children: 'Button' }),
  },
};

export const SizeXL: Story = {
  args: {
    bg:'darkGreen',
    variant: 'XL',
    children: React.createElement(Text, { as: 'span', variant: 'body1', children: 'XL Button' }),
  },
};

export const SizeL: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'L',
    children: React.createElement(Text, { as: 'span', variant: 'body1', children: 'L Button' }),
  },
};

export const SizeM: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'M',
    children: React.createElement(Text, { as: 'span', variant: 'body1', children: 'M Button' }),
  },
};

export const SizeS: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'S',
    children: React.createElement(Text, { as: 'span', variant: 'body1', children: 'S Button' }),
  },
};


export const Link: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'M',
    as: 'link',
    href: '/',
    children: React.createElement(Text, { as: 'span', variant: 'link', children: 'Link Button' }),
  },
};

export const FullWidth: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'M',
    full: true,
    children: React.createElement(Text, {
      as: 'span',
      variant: 'body1',
      children: 'Full Width Button',
    }),
  },
};

export const Disabled: Story = {
  args: {
    bg: 'darkGreen',
    variant: 'M',
    disabled: true,
    children: React.createElement(Text, {
      as: 'span',
      variant: 'body1',
      children: 'Disabled Button',
    }),
  },
};

