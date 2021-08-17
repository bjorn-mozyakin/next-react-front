import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default class Fingerprint {
  static async get() {
    const lsNameFingerprint = "_w_fingerprint";
    let fingerprint = localStorage.getItem(lsNameFingerprint);
    if (!fingerprint) {
      fingerprint = await (async () => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        return visitorId;
      })();
      localStorage.setItem(lsNameFingerprint, fingerprint);
    }
    return fingerprint;
  }
}
