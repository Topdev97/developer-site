import React from "react";
import { Navbar } from "../Navbar";
import { Mobilebar } from "../Mobilebar";
import { Socialmenu } from "../Socialmenu";
interface LayoutProps {
    children: React.ReactNode;
  }
  
const Layout:React.FC<LayoutProps>  = ({children}) => {
  return (
    <>
      <Navbar />
      <Mobilebar />
      <Socialmenu />
      {children}
    </>
  );
};
export default Layout