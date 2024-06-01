import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyButton, MyButtonProps } from "../components/MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
} as Meta;

const Template: Story = (args) => <MyButton {...(args as MyButtonProps)} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};
