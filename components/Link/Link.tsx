import NextLink from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
  href?: string;
  classNames?: string;
  rel?: string;
  scroll?: boolean;
  target?: string;
  title?: string;
};

function Link({
  children,
  href = "/",
  classNames = "",
  rel = "",
  scroll = true,
  target = "_self",
  title = "",
  ...rest
}: Props) {
  return (
    <NextLink href={href} scroll={scroll}>
      <a
        className={classNames}
        target={target}
        {...(title ? { title } : "")}
        {...rest}
        {...(rel ? { rel } : "")}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
