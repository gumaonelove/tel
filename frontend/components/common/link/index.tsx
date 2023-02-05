import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  path: string;
  children?: string | ReactNode;
  className?: string;
  onClick?: () => void;
}

const Link: FC<IProps> = (props) => {
  const { path, children, className, onClick } = props;

  return (
    <NextLink href={path} className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default Link;
