import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {PAGES_FULLED_HEADER} from "../../lib/constants";

export const IsFulledHeader = (): boolean => {
  const [isFulledHeader, setIsFulledHeader] = useState(false);
  const {pathname} = useRouter();
  const checkPathname = () => {
    PAGES_FULLED_HEADER.map((item) => {
      pathname === item ? setIsFulledHeader(false) : setIsFulledHeader(true);
    })
  }

  useEffect(() => {
    checkPathname();
  }, [pathname])

  return isFulledHeader;
}