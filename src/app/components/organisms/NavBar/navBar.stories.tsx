import type { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "./navBar";

const meta: Meta<typeof NavBar> = {
  title: "Components/Organisms/NavBar",
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: { text: "NavBar" },
};
