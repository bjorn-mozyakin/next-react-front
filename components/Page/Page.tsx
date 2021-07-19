// Styles
// import styles from './Page.module.scss';
import React, { FC } from "react";

type PageProps = {
  children?: React.ReactNode;
  type?: string;
};

export const Page: FC = ({ children, type = "" }: PageProps) => {
  return (
    <div className={`page page_${type}`}>
      <div className="page__body">
        <div className="page__content">{children}</div>
      </div>
    </div>
  );
};

export default Page;
