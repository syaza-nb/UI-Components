
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],

  parameters: {
    docs: {
      description: {
        component:
          "A reusable and accessible form label component built with Radix UI and Vanilla Extract.",
      },
    },
  },

  argTypes: {
    children: {
      control: "text",
      description: "Text displayed inside the label.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Controls the label text size.",
    },
    required: {
      control: "boolean",
      description: "Displays a required asterisk.",
    },
    optional: {
      control: "boolean",
      description: "Displays an optional indicator.",
    },
    disabled: {
      control: "boolean",
      description: "Displays the label in a disabled style.",
    },
    error: {
      control: "boolean",
      description: "Displays the label in an error style.",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Username",
    size: "md",
  },
};

export const Required: Story = {
  args: {
    children: "Email Address",
    required: true,
  },
};

export const Optional: Story = {
  args: {
    children: "Phone Number",
    optional: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Account Name",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    children: "Password",
    error: true,
  },
};

export const Small: Story = {
  args: {
    children: "Small Label",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Label",
    size: "lg",
  },
};
