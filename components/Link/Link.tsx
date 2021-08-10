import NextLink from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
  href?: string;
  classNames?: string;
  target?: string;
  title?: string;
  scroll?: boolean;
};

function Link({
  children,
  href = "/",
  classNames = "",
  target = "_self",
  scroll = true,
  title = "",
  ...rest
}: Props) {
  title = "asdf";
  return (
    <NextLink href={href} scroll={scroll}>
      <a
        className={classNames}
        target={target}
        {...(title ? `title=${title}` : "")}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
