const RECAPTCHA_KEY = "6LcVocUZAAAAAKHcmBE8vMZbGUB73ZLZ6cfuILKy";

export class ReCaptcha {
  // получаем token для reCAPTCHA v3
  static getToken(action) {
    return new Promise((resolve) =>
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_KEY, { action: action })
          .then((token) => {
            resolve(token);
          });
      })
    );
  }
}
