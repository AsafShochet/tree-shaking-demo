import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyTextField, MyTextFieldProps } from "../components/MyTextField";

export default {
  title: "Example/MyTextField",
  component: MyTextField,
} as Meta;

const Template: Story = (args) => (
  <MyTextField {...(args as MyTextFieldProps)} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "Text",
  onChange: () => console.log("text changed"),
};
