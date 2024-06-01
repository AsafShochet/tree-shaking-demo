import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyTitle, MyTitleProps } from "../components/MyTitle";

export default {
  title: "Example/MyTitle",
  component: MyTitle,
} as Meta;

const Template: Story = (args) => <MyTitle {...(args as MyTitleProps)} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Title",
};
