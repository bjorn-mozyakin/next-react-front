import React from "react";
import { useDispatch } from "react-redux";

import { getAllRubrics, getMyRubrics } from "../../store/common/common.actions";

type Props = {
  children?: React.ReactNode;
};

export const StoreInitial = ({ children }: Props) => {
  const dispatch = useDispatch();
  dispatch(getMyRubrics());
  dispatch(getAllRubrics());

  return <>{children}</>;
};

export default StoreInitial;
