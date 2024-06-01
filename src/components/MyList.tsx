import _ from "lodash";
import React from "react";

export interface MyListProps {
  items: string[];
  shouldSort?: boolean;
}

export const MyList: React.FC<MyListProps> = ({ items, shouldSort }) => {
  const itemsToDisplay = shouldSort ? _.sortBy(items) : items;
  return (
    <ul>
      {itemsToDisplay.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
