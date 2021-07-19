// Styles
// import styles from './BtnFlat.module.scss';
import React from "react";
import { useDispatch } from "react-redux";

import { getBannerList } from "../../srore/actions";

export const BannerStore = ({ children }) => {
  const dispatch = useDispatch();
  dispatch(getBannerList());

  return <>{children}</>;
};

export default BannerStore;
