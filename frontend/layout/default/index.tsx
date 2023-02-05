import DefaultLayoutContainer from "./container";
import {FC} from "react";

interface IProps {
  children: any;
  isFulledHeader: boolean;
}
const DefaultLayout: FC<IProps> = ({isFulledHeader, children}) => {
  return (
    <DefaultLayoutContainer isFulledHeader={isFulledHeader}>
      {children}
    </DefaultLayoutContainer>
  )
};



export default DefaultLayout;
