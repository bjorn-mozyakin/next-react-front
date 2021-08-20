/**
 * Class CookieManager.
 * Занимается различными манипуляциями с cookie.
 */
class CookieManager {
  /**
   * Set cookie.
   * @param params.name - cookie name
   * @param params.value - cookie value
   * @param params.expires - Expires (days: number or date: string)
   * @param params.path - Set path. '/' for the whole website.
   * @param params.domain - Set domain
   * @param params.secure - Use SSL when sending the cookie to the server
   * @param params.httpOnly -  Using the HttpOnly flag when generating a cookie helps
   mitigate the risk of client side script accessing the protected cookie (if
   the browser supports it).
   */
  set(params) {
    let cookie = params.name + "=" + encodeURI(params.value) + ";";

    if (params.expires) {
      if (typeof params.expires === "number") {
        params.expires = new Date(
          new Date().getTime() +
            parseInt(params.expires, 10) * 1000 * 60 * 60 * 24
        );
      }
      cookie += "expires=" + params.expires.toUTCString() + ";";
    }

    cookie += params.path ? "path=" + params.path + ";" : "";
    cookie += params.domain ? "domain=" + params.domain + ";" : "";
    cookie += params.secure ? "secure;" : "";
    cookie += params.httpOnly ? "httpOnly;" : "";

    document.cookie = cookie;
  }

  /**
   * @description Get cookie
   * @param {string} name - cookie name
   * @returns {string} value - cookie value
   */
  get(name) {
    const parts = document.cookie.split(name + "=");

    if (parts.length === 2) {
      return decodeURI(parts.pop().split(";").shift());
    }
  }

  /**
   * Delete cookie
   * @param params.name - cookie name
   * @param params.path - cookie path
   * @param params.domain - cookie domain
   */
  delete(params) {
    if (this.get(params.name)) {
      this.set({
        name: params.name,
        value: "",
        expires: -1,
        path: params.path,
        domain: params.domain,
      });
    }
  }
  // дальше методы, которые, возможно, понадобятся в будущем
  //   /**
  //    * Get all cookies (if any)
  //    * @returns object cookies
  //    */
  //   getAll() {
  //     let cookies = {},
  //       allCookies = document.cookie,
  //       cookie;
  //
  //     if (!allCookies) {
  //       return cookies;
  //     }
  //
  //     let list = allCookies.split('; '),
  //       len = list.length;
  //
  //     while (len--) {
  //       cookie = list[len].split('=');
  //
  //       cookies[cookie[0]] = decodeURI(cookie[1]);
  //     }
  //
  //     return cookies;
  //   }
  //
  //   /**
  //    * Get all keys
  //    * @returns array keys
  //    */
  //   keys() {
  //     let keys = [],
  //       allCookies = document.cookie;
  //
  //     if (allCookies === '') {
  //       return keys;
  //     }
  //
  //     let list = allCookies.split('; '),
  //       len = list.length;
  //
  //     while (len--) {
  //       let key = list[len].split('=');
  //       keys[len] = key[0];
  //     }
  //
  //     return keys;
  //   }
  //
  // /**
  //  * Check if cookie exists
  //  * @param name - cookie name
  //  */
  // has(name) {
  //   return this.get(name);
  // }
}

const cookieManager = new CookieManager();

export default cookieManager;
