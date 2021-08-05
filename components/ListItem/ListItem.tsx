import React from "react";

// Styles
import styles from "./ListItem.module.scss";

type ListItemProps = {
  children?: React.ReactNode;
  name?: string;
  createdAt?: string;
};

export const ListItem = ({ name, createdAt }: ListItemProps) => {
  console.log("crab", name, createdAt);

  return (
    <li className={styles["list-item"]}>
      <a className={styles["list-item__link"]} href="/forum/hashtag/отношения">
        <div className={styles["list-item__container"]}>
          <div className={styles["list-item__first-line"]}>
            <h3 className={styles["list-item__title"]}>{name}</h3>
            <div className={styles["list-item__other-text"]}>
              Создана {createdAt}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ListItem;
