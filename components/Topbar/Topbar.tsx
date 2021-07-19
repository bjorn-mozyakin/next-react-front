// Styles
// import styles from './Topbar.module.scss';

import React, { FC } from "react";

import Nav from "../Nav/Nav";
import Search from "../Search/Search";

export const Topbar: FC = () => {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <Nav />
        <Search />
      </div>
    </div>
  );
};

export default Topbar;
