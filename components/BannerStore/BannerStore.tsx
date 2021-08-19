// Styles
// import styles from './BtnFlat.module.scss';
import React from "react";
import { useDispatch } from "react-redux";

import { getBannerList } from "../../store/common/common.actions";

type Props = {
  children?: React.ReactNode;
};

export const BannerStore = ({ children }: Props) => {
  const dispatch = useDispatch();
  dispatch(getBannerList());

  return <>{children}</>;
};

export default BannerStore;
