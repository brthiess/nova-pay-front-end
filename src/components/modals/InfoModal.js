import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/InfoModal.module.css";

function InfoModal(props) {
  const showModal = useSelector((state) => state.showInfo);
  const modalText = useSelector((state) => state.modalText);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({ type: "modal/showInfo", payload: false });
  }

  return (
    <section
      className={
        (showModal ? "" : styles.hidden) + " " + styles.darkenedBackground
      }
    >
      <div className={styles.infoModalWrapper}>
        <div className={styles.text}>{modalText}</div>
        <button onClick={closeModal} className={styles.modalButton}>
          OK
        </button>
      </div>
    </section>
  );
}

export default InfoModal;
