import HeadNext from "next/head";
import React from "react";

import HeadAdfoxScript from "./HeadAdfoxScript";
import HeadAdScripts from "./HeadAdScripts";
import HeadCommon from "./HeadCommon";

type HeadProps = {
  children?: React.ReactNode;
  title?: string;
  needAdScripts?: boolean;
  needAdfoxScript?: boolean;
};

export const Head = ({
  children,
  title = "Форум Woman.ru",
  needAdScripts = true,
  needAdfoxScript = true,
}: HeadProps) => {
  return (
    <HeadNext>
      <HeadCommon />
      <title>{title}</title>
      {needAdScripts && <HeadAdScripts />}
      {needAdfoxScript && <HeadAdfoxScript />}
      {/*
      <link href="/static/main.css" rel="stylesheet" />
      */}

      <link
        rel="stylesheet"
        href="https://i42-cdn.woman.ru/static/forum/desktop/css/_desktop.css?36-1601"
        media="all"
      />

      {children}
    </HeadNext>
  );
};

export default Head;
