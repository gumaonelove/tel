import React from "react";
import DefaultLayoutFooter from "../footer";
import DefaultLayoutHeader from "../header";

interface IProps {
  children: any;
  isFulledHeader: boolean;
}

const DefaultLayoutContainer: React.FC<IProps> = ({ children, isFulledHeader }) => {
  return (
    <>
      <DefaultLayoutHeader
        isFulledHeader={isFulledHeader}
      />
      {children}
      <DefaultLayoutFooter />
    </>
  );
};

export default DefaultLayoutContainer;
