import React from "react";
import "./style.css";
interface propsWithChildren {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: propsWithChildren) => {
  if (children) {
    return <div className="bg-red-200 text-red-600 px-5 py-2 rounded-md">{children}</div>;
  } else {
    return <div className="px-5 py-2 h-10"></div>;
  }
};
