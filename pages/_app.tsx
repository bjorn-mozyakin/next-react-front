// import "../styles/_vars.scss";
// import "../styles/desktop/_vars.scss";
// import "../styles/globals.css";
// import "../styles/main/main.css";

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

<<<<<<< Updated upstream:pages/_app.js
import { useStore, reducer } from "../srore/reducer";

import BannerStore from "../components/BannerStore/BannerStore";

function MyApp({ Component, pageProps }) {
=======
import { reducer } from "../srore/reducer";

import BannerStore from "../components/BannerStore/BannerStore";

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
>>>>>>> Stashed changes:pages/_app.tsx
  // const store = useStore(pageProps.initialReduxState);

  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <BannerStore>
        <Component {...pageProps} />
      </BannerStore>
    </Provider>
  );
}

export default MyApp;
