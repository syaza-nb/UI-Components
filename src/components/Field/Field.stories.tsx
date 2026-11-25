
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "./Field";
import { themeClass } from "../../styles/theme.css";

const meta = {
  title: "Components/Field",
  component: Field,

  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{
          padding: "24px",
          maxWidth: "420px",
        }}
      >
        <Story />
      </div>
    ),
  ],

  parameters: {
    docs: {
      description: {
        component:
          "A reusable and accessible input field with validation, helper text and size variants.",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default field
export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
    inputSize: "sm"
  },
};

// Email field
export const Email: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "example@email.com",
    required: true,
    inputSize: "sm"
  },
};

// Password field
export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    inputSize: "sm"
  },
};

// Field with helper text
export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Username must contain at least 5 characters.",
    inputSize: "sm"
  },
};

// Field with error
export const WithError: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    value: "invalid-email",
    error: "Please enter a valid email address.",
    inputSize: "sm"
  },
};

// Disabled field
export const Disabled: Story = {
  args: {
    label: "Full Name",
    placeholder: "This field is disabled",
    disabled: true,
    inputSize: "sm"
  },
};

// Small field
export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    inputSize: "sm",
  },
};

// Large field
export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    inputSize: "lg",
  },
};
