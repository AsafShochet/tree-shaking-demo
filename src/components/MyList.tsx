import React from "react";

export interface MyListProps {
  items: string[];
}

export const MyList: React.FC<MyListProps> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
