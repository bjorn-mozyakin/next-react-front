import NextLink from "next/link";
import React from "react";

type LinkProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  scroll?: boolean;
};

function Link({
  children,
  href = "/",
  className = "",
  target = "_self",
  scroll = true,
  ...rest
}: LinkProps) {
  return (
    <NextLink href={href} scroll={scroll}>
      <a className={className} target={target} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
