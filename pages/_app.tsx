// import "../styles/_vars.scss";
// import "../styles/desktop/_vars.scss";
// import "../styles/globals.css";
// import "../styles/main/_mobile.css";
// import "../styles/main/_desktop.css";

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import { reducer } from "../store/reducer";
import { reducer } from "../store/rootReducer";

import BannerStore from "../components/BannerStore/BannerStore";
import StoreInitial from "../components/StoreInitial/StoreInitial";

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
        <StoreInitial>
          <Component {...pageProps} />
        </StoreInitial>
      </BannerStore>
    </Provider>
  );
}

export default MyApp;
