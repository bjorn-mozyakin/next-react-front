import React from "react";

import { initializeStore } from "../../store/old/reducer";

import Layout from "../../components/Layout/Layout";

function LivePage() {
  return <Layout>Страница прямого эфира</Layout>;
}

export default LivePage;

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initializeStore();
  // const { dispatch } = reduxStore
  //
  // dispatch({
  //     type: 'TICK',
  //     light: false,
  //     lastUpdate: Date.now(),
  // })

  return { props: { initialReduxState: reduxStore.getState() } };
}
