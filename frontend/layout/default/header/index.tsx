import React, {FC} from "react";
import DefaultHeaderLeft from "./header-left";
import DefaultHeaderMiddle from "./header-middle";
import DefaultHeaderRight from "./header-right";
import {IPropsHeader} from "./types";
const DefaultLayoutHeader: FC<IPropsHeader> = ({isFulledHeader}) => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className={isFulledHeader ? "header__content header__content-fulled" : "header__content"}>
          <DefaultHeaderLeft/>
          {
            isFulledHeader && (
              <>
                <DefaultHeaderMiddle/>
                <DefaultHeaderRight/>
              </>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default DefaultLayoutHeader;
