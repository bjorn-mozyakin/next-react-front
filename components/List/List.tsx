// Styles

import React from "react";

import ListItem from "../ListItem/ListItem";

// import styles from "./List.module.scss";

type ListProps = {
  data: any;
};

export const List = ({ data }: ListProps) => {
  console.log("crab", data);

  return (
    <div className="list">
      <ul className="list__container">
        {data.map((thread, idx) => (
          <ListItem key={`list-item_${idx}`} {...thread} />
        ))}
      </ul>
    </div>
  );
};

export default List;
