import React from "react";

export interface MyTitleProps {
  text: string;
}

export const MyTitle: React.FC<MyTitleProps> = ({ text }) => <h1>{text}</h1>;
