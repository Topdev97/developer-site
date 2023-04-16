import React from "react";
import "./style.css";
interface propsWithChildren {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: propsWithChildren) => {
  if (children !== "") {
    return <div>{children}</div>;
  } else {
    return <div></div>;
  }
};
