
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A reusable and responsive footer component with customizable branding, navigation links and copyright information.",
      },
    },
  },

  argTypes: {
    brandName: {
      control: "text",
      description: "Name of the brand displayed in the footer.",
    },
    description: {
      control: "text",
      description: "Description displayed below the brand name.",
    },
    copyright: {
      control: "text",
      description: "Copyright information displayed at the bottom.",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomBrand: Story = {
  args: {
    brandName: "My Company",
    description:
      "We create innovative digital solutions for modern businesses.",
    copyright: "© 2026 My Company. All rights reserved.",
  },
};

export const MinimalFooter: Story = {
  args: {
    brandName: "Minimal",
    description: "Simple design. Better experiences.",
    linkGroups: [],
    copyright: "© 2026 Minimal. All rights reserved.",
  },
};
