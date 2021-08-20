import FingerprintJS from "@fingerprintjs/fingerprintjs";

import cookieManager from "./cookieManager";

export default class Fingerprint {
  static async get() {
    const cookieNameFingerprint = "_w_fingerprint";
    let fingerprint = cookieManager.get(cookieNameFingerprint);
    if (!fingerprint) {
      fingerprint = await (async () => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        return visitorId;
      })();
      cookieManager.set({ name: cookieNameFingerprint, value: fingerprint });
    }
    return fingerprint;
  }
}
