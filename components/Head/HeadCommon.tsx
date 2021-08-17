import React from "react";

export const HeadCommon = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
        rel="stylesheet"
        crossOrigin=""
      />
      <script
        src="https://www.google.com/recaptcha/api.js?render=6LcVocUZAAAAAKHcmBE8vMZbGUB73ZLZ6cfuILKy"
        defer
      ></script>
    </>
  );
};

export default HeadCommon;
