import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  let render = [];
  props.arr.forEach((e, i) => {
    render.push(<span key={i}>{e}</span>);
  });

  return (
    <div className={styles.container}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h3>Interests</h3>
      <div className={styles.rend}>{render}</div>
      <div>
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
      </div>
    </div>
  );
};
export default Card;
