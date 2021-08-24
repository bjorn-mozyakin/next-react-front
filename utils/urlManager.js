/**
 * Class UrlManger.
 * Занимается различными манипуляциями с url, т.ч. с хэшами.
 */

import Logger from "common/core/logger";
import womanData from "common/core/store/WomanData";

const logger = new Logger("UrlManager");

class UrlManager {
  // удобные свойства для определения типа страницы по всему приложению
  isThreadPage = false;
  isMainPage = false;
  isListingPage = false;
  isLivePage = false;
  isArchivePage = false;
  isRubricPage = false;
  isSearchPage = false;
  isExpertsPage = false;
  isServicePage = false;
  isHashtagPage = false;
  isExpertInterfacePage = false;
  isUserProfilePage = false;
  isUserProfileEditPage = false;
  isUserConfirmEmailPage = false;
  isAutoStatusesPage = false;

  constructor() {
    // Если обратиться к фронтед классу WomanData - возникнет круговая зависимость и усе поломается
    this.pageType = womanData.pageData.pageTemplate;
    logger.log(`Тип страницы: ${this.pageType}`);

    // определяем части url, использующиеся при беск.скроле
    const matches = location.pathname.match(this._getRegExp());
    if (matches) {
      this.initialUrlPathRoot = matches[1];
      if (this.initialUrlPathRoot.slice(-1) !== "/") {
        this.initialUrlPathRoot = this.initialUrlPathRoot + "/";
      }
    }

    // формируем initialUrlParams из всех query-параметров, которые не относятся к меткам (метки: wic, wil, wid)
    const urlParams = location.search.replace("?", "");
    const splittedUrlParams = urlParams
      .split("&")
      .map((param) => param.split("="))
      .filter(
        (param) =>
          param[0] !== "wic" && param[0] !== "wil" && param[0] !== "wid"
      )
      .map((param) => param.join("="));
    this.initialUrlParams = splittedUrlParams.join("&");

    this.jumpToMessage();
  }

  _getRegExp() {
    let regExp;
    switch (this.pageType) {
      case "forum_thread":
        regExp = /(.*?\/thread\/[0-9]+?)\/([0-9]+)?\/?/i;
        this.isThreadPage = true;
        break;
      case "forum_live":
        regExp = /(\/forum\/all\/)/i;
        this.isLivePage = true;
        break;
      case "forum_archive":
        regExp = /(.*?\/forum\/archive_[0-9]+)\/([0-9]+)?\/?/i;
        this.isArchivePage = true;
        break;
      case "forum_search":
        regExp = /(\/search)/i;
        this.isSearchPage = true;
        break;
      case "forum_listing":
        regExp = /(.*?\/forum)\/([0-9]+)?\/?/i;
        this.isListingPage = true;
        break;
      case "forum_expert_interface":
        regExp = /(\/forum\/expert_interface)\/([0-9]+)?\/?/i;
        this.isExpertInterfacePage = true;
        break;
      case "forum_rubric":
        regExp = /(.+\/forum\/)([0-9]+)?\/?/i;
        this.isRubricPage = true;
        break;
      case "forum_experts":
        regExp = /(\/forum\/expert\/all-answers)\/([0-9]+)?\/?/i;
        this.isExpertsPage = true;
        break;
      case "forum_hashtag":
        regExp = /(\/forum\/hashtag\/.*)/i;
        this.isHashtagPage = true;
        break;
      case "forum_main":
        regExp = /(\/forum\/)/i;
        this.isMainPage = true;
        break;
      case "forum_service":
        regExp = /(\/pages\/)/i;
        this.isServicePage = true;
        break;
      case "forum_user_profile":
        regExp = /(\/user\/[0-9]+\/([A-Za-z_]+)?\/?)/i;
        if (location.pathname.includes("edit")) {
          this.isUserProfileEditPage = true;
        } else if (location.pathname.includes("confirm-email")) {
          this.isUserConfirmEmailPage = true;
        } else {
          this.isUserProfilePage = true;
        }
        break;
      case "forum_user_statuses":
        regExp = /(\/user-statuses\/\?type=auto)/i;
        this.isAutoStatusesPage = true;
        break;
      default:
        logger.error("Неизвестный тип страницы!");
    }

    return regExp;
  }

  pushState(newUrl) {
    history.pushState(null, document.title, newUrl);
  }

  addSubHash(hash) {
    if (
      typeof hash !== "string" ||
      new RegExp(`[#/]${hash}/`, "gi").test(location.hash)
    ) {
      return;
    }
    location.hash = `${hash}/`;
  }

  removeSubHash(hash) {
    if (typeof hash !== "string" || !this.hasSubHash(hash)) {
      return;
    }
    this.pushState(location.pathname + location.search);
  }

  hasSubHash(search = "", url = location.href) {
    const searchRE = new RegExp(`#(?:.+/?)?${search}(/|$)`);
    const hash = url.replace(/^.*?(#|$)/, "#");
    const matches = hash.match(searchRE);
    if (matches) {
      return matches[0].replace(/[/#]/g, "");
    } else {
      return false;
    }
  }

  // метод нужен чтоб при перезагрузке текущей страницы с хэшем срабатывал прыжок к сообщению,
  // без него не происходит прыжка по крайней мере в хроме (баг? фича?)
  jumpToMessage() {
    if (this.hasMessageHash()) {
      setTimeout(() => (location.href = location.hash), 1000);
    }
  }

  // есть ли хэш, отвечающий за переход к сообщению
  hasMessageHash() {
    const hash = location.hash;
    return hash.includes("#message_last") || /^#m\d+$/.test(hash);
  }
}

const urlManager = new UrlManager();

export default urlManager;
