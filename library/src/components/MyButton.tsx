import React from "react";

export interface MyButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);
