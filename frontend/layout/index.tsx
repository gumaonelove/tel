import React from "react";
import { NextPage } from "next";
import DefaultLayout from "./default";

interface IProps {
  component: NextPage & {
    layout?: React.ComponentType | undefined;
  };
  children: any;

  isFulledHeader: boolean;
}

const AppLayout: React.FC<IProps> = ({ component, children, isFulledHeader }) => {
  // @ts-ignore
  let Layout: React.ComponentType = DefaultLayout;

  if (component.layout) Layout = component.layout;
  // @ts-ignore
  return <Layout isFulledHeader={isFulledHeader}>{children}</Layout>;
};

export default AppLayout;
