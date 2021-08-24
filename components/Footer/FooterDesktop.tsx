import React from "react";

import Footer16plus from "./Parts/Footer16plus";
import FooterCopyright from "./Parts/FooterCopyright";
import FooterLogos from "./Parts/FooterLogos";
import FooterMenu from "./Parts/FooterMenu";
import FooterRules from "./Parts/FooterRules";
import FooterShare from "./Parts/FooterShare";
import FooterSitemap from "./Parts/FooterSitemap";

export const FooterDesktop = () => {
  return (
    <footer className="page__footer footer">
      <div className="footer__container">
        <FooterSitemap />
        <FooterMenu />
        <FooterLogos />
        <FooterRules />
        <FooterShare
          className="footer__social"
          wrapperClassName="footer__socials"
        />
        <div className="footer__mob-version icon-before_smartphone-18-carbon">
          Мобильная версия
        </div>
        <FooterCopyright />
        <Footer16plus />
      </div>
    </footer>
  );
};

export default FooterDesktop;
