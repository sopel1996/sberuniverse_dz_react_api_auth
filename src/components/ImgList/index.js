import React from "react";
import styles from "./style.module.css";

export const ImgList = ({ list }) => {
  return list.map((el) => (
    <img src={el.url} className={styles.gridTable_item} key={el.id} />
  ));
};
