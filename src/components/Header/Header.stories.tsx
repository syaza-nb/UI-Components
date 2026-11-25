

import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Header } from "./Header";
import { themeClass } from "../../styles/theme.css";

const meta = {
  title: "Components/Header",
  component: Header,

  decorators: [
    (Story: ComponentType) => (
      <div className={themeClass}>
        <Story />
      </div>
    ),
  ],

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive and reusable navigation header with desktop and mobile navigation support.",
      },
    },
  },

  tags: ["autodocs"],

} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: "MyBrand",
    navItems: [
      { label: "Home", href: "/", active: true },
      { label: "About", href: "/about" },
      { label: "Services", href : "/services" },
      { label: "Contact", href: "/contact" },
    ],
    ctaLabel: "Get Started",
    ctaHref: "/signup",
  },
};

export const WithoutCTA: Story = {
  args: {
    brandName: "MyBrand",
    navItems: [
      { label: "Home", href: "/", active: true },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
    ],
  },
};

export const CustomBrand: Story = {
  args: {
    brandName: "TechFlow",
    navItems: [
      { label: "Dashboard", href: "/dashboard", active: true },
      { label: "Projects", href: "/projects" },
      { label: "Settings", href: "/settings" },
    ], 
    ctaLabel: "My Account",
    ctaHref: "/account",
  },
};

export const BrandOnly: Story = {
  args: {
    brandName: "MyBrand",
  },
};

