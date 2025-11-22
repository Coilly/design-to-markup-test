import Img from '@/components/Img/Img';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'image/img_card.png',
    alt: '기본 이미지',
  },
};

export const WithSize: Story = {
  args: {
    src: 'image/img_card.png',
    alt: '크기 지정 이미지',
    width: 400,
    height: 300,
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
    src: 'image/logo.png',
    alt: '로고',
    width: 109,
    height: 22,
  },
};

export const Thumbnail: Story = {
  args: {
    variant: 'thumbnail',
    src: 'image/img_card.png',
    alt: '썸네일 이미지',
    width: 200,
    height: 200,
  },
};

