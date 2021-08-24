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
  isMobile: boolean;
};

export const Head = ({
  children,
  title = "Форум Woman.ru",
  needAdScripts = true,
  needAdfoxScript = true,
  isMobile,
}: HeadProps) => {
  return (
    <HeadNext>
      <HeadCommon />
      <title>{title}</title>
      {needAdScripts && <HeadAdScripts />}
      {needAdfoxScript && <HeadAdfoxScript />}

      {/*{isMobile ? (*/}
      {/*  <link*/}
      {/*    rel="stylesheet"*/}
      {/*    href="https://i42-cdn.woman.ru/static/forum/mobile/css/_mobile.css?36-1610"*/}
      {/*    media="all"*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <link*/}
      {/*    rel="stylesheet"*/}
      {/*    href="https://i42-cdn.woman.ru/static/forum/desktop/css/_desktop.css?36-1601"*/}
      {/*    media="all"*/}
      {/*  />*/}
      {/*)}*/}

      {isMobile ? (
        <link rel="stylesheet" href="/static/main/_mobile.css" media="all" />
      ) : (
        <link rel="stylesheet" href="/static/main/_desktop.css" media="all" />
      )}
      {children}
    </HeadNext>
  );
};

export default Head;
