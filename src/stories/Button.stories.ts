import { Button, Typography } from "../components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    children: "primary button",
    variant: "primary",
  },
};

export const outline: Story = {
  args: {
    children: "outline button",
    variant: "outline",
  },
};
