import Text from '@/components/Text/Text';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'heading texts',
    variant: 'heading1',
    className: 'test',
  },
};

export const Heading2: Story = {
  args: {
    children: 'heading2 text',
    variant: 'heading2',
    className: 'test',
  },
};

export const Heading3: Story = {
  args: {
    children: 'heading3 text',
    variant: 'heading3',
    className: 'test',
  },
};

export const Paragraph: Story = {
  args: {
    children: 'paragraph text',
    variant: 'paragraph',
    className: 'test',
  },
};

export const Link: Story = {
  args: {
    children: 'link text',
    variant: 'link',
    className: 'test',
  },
};

export const Captions: Story = {
  args: {
    children: 'captions text',
    variant: 'captions',
    className: 'test',
  },
};
