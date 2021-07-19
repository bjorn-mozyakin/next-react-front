// Styles
import styles from "./List.module.scss";

import React from "react";

import ListItem from "../ListItem/ListItem";

type ListProps = {
  data: any;
};

export const List = ({ data }: ListProps) => {
  console.log("crab", data);

  return (
    <div className={styles.list}>
      <ul className={styles.list__container}>
        {data.map((thread, idx) => (
          <ListItem key={`list-item_${idx}`} {...thread} />
        ))}
      </ul>
    </div>
  );
};

export default List;
