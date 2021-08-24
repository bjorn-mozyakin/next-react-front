import React from "react";

import FooterActions from "./FooterActions";
import FooterCopyright from "./FooterCopyright";
import FooterShare from "./FooterShare";

export const FooterMobile = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo"></div>
        <FooterShare />
        <FooterActions />
        <FooterCopyright />
        <aside className="footer__16plus">&nbsp;16+</aside>
      </div>
    </footer>
  );
};

export default FooterMobile;
