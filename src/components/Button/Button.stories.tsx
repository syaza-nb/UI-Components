
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";
import { themeClass } from "../../styles/theme.css";

const meta = {
  title: "Components/Button",
  component: Button,

  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{ padding: "24px" }}
      >
        <Story />
      </div>
    ),
  ],

  parameters: {
    docs: {
      description: {
        component:
          "A reusable button component with Radix Slot support, multiple variants and sizes.",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: <a href="/dashboard">Go to Dashboard</a>,
  },
};
