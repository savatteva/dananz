import { Typography } from '../components';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const heading_H1: Story = {
  args: {
    Tag: "h1",
    size: "size72",
    text: "the biggest"
  },
};

export const heading_H2: Story = {
  args: {
    Tag: "h2",
    size: "size36",
    text: "less bigger than first"
  },
};

export const heading_H3: Story = {
  args: {
    Tag: "h3",
    size: "size24",
    text: "im little heading"
  },
};

export const regular: Story = {
  args: {
    text: "just text"
  },
}

export const regular_light: Story = {
  args: {
    text: "light text",
    color: "lightColor"
  },
};
