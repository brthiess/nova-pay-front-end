import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/InfoModal.module.css";

function InfoModal(props) {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  return <section className={styles.infoModalWrapper}>Hi</section>;
}
