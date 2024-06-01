import React from "react";
import { Meta, Story } from "@storybook/react";
import { MyList, MyListProps } from "../components/MyList";

export default {
  title: "Example/MyList",
  component: MyList,
} as Meta;

const Template: Story = (args) => <MyList {...(args as MyListProps)} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ["Item 1", "Item 2", "Item 3"],
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: ["Item 2", "Item 3", "AA", "BB"],
  shouldSort: true,
};
