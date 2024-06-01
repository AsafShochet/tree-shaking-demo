import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyDropdown, MyDropdownProps } from "../components/MyDropdown";

export default {
  title: "Example/MyDropdown",
  component: MyDropdown,
} as Meta;

const Template: Story = (args) => <MyDropdown {...(args as MyDropdownProps)} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ],
};
