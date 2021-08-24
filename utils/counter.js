/**
 * Class Counter.
 * Определяет класс счетчиков яндекс.метрики.
 */
import helpers from "common/core/helpers";

const FORUM_COUNTER = 49969501; // счетчик только для форума
const COMMON_COUNTER = 1282253; // счетчик для форума и медиа (общий)

class Counter {
  // отправка достижения цели (reachGoal)
  sendYaMetrika(target, params = null, callback, type) {
    callback = typeof callback === "function" ? callback : null;
    helpers.waitFor("ym", () => {
      if (!type || type === "forum") {
        window.ym(FORUM_COUNTER, "reachGoal", target, params, callback);
      }
      if (!type || type === "common") {
        window.ym(COMMON_COUNTER, "reachGoal", target, params);
      }
    });
  }

  // отправка произвольных параметров визита (params)
  setYaMetrikaParams(params) {
    helpers.waitFor("ym", () => {
      window.ym(FORUM_COUNTER, "params", params);
      window.ym(COMMON_COUNTER, "params", params);
    });
  }

  // отправка данных о просмотре (hit)
  // используется при бесконечном скролле
  sendPageView(updatedParams) {
    this._ymPageView(updatedParams);
    this._gtagPageView(updatedParams);
    this._liPageView();
    this._tnsPageView();
  }

  // PageView для Яндекс.Метрики
  _ymPageView(updatedParams = {}) {
    helpers.waitFor("ym", () => {
      const oldParams = window.yaParams;
      const params = helpers.updateObject(oldParams, updatedParams);
      window.ym(FORUM_COUNTER, "hit", document.URL, {
        referer: document.referrer,
        title: document.title,
        params: params,
      });
      window.ym(COMMON_COUNTER, "hit", document.URL, {
        referer: document.referrer,
        title: document.title,
        params: params,
      });
    });
  }

  // PageView для Google Analytics
  _gtagPageView(updatedParams = {}) {
    helpers.waitFor("gtag", () => {
      const oldParams = window.gtagParams;
      const params = helpers.updateObject(oldParams, updatedParams);
      window.gtag("config", "UA-3365753-20", params);
    });
  }

  // PageView для LiveInternet
  _liPageView() {
    new Image().src =
      "//counter.yadro.ru/hit;hsdigital/wn/woman/forum?r" +
      escape(document.referrer) +
      (typeof screen === "undefined"
        ? ""
        : ";s" +
          screen.width +
          "*" +
          screen.height +
          "*" +
          (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) +
      ";u" +
      escape(document.URL) +
      ";h" +
      escape(document.title.substring(0, 80)) +
      ";" +
      Math.random();
  }

  // PageView для TNS
  _tnsPageView() {
    helpers.waitFor("tnsCounterTimeout_ru", () => {
      // параметры для hit можно не указывать - будут взяты такие же, как и при первом PageView
      window.tnsCounterTimeout_ru.hit();
    });
  }
}

const counter = new Counter();

export default counter;
