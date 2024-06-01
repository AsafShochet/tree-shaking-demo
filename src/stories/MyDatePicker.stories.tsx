import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyDatePicker, MyDatePickerProps } from "../components/MyDatePicker";

export default {
  title: "Example/MyDatePicker",
  component: MyDatePicker,
} as Meta;

const Template: Story = (args) => (
  <MyDatePicker {...(args as MyDatePickerProps)} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "2023-01-01",
};
