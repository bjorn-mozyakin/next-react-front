// import "../styles/_vars.scss";
// import "../styles/desktop/_vars.scss";
// import "../styles/globals.css";
// import "../styles/main/_desktop.css";

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from "../store/reducer";

import BannerStore from "../components/BannerStore/BannerStore";

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
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
