import { NavLink } from "react-router-dom";
import styles from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.ldsHourglass}>
        {children}

        <div className={styles.modalButtonContainer}>
          <NavLink to="/">
            <button className={styles.modalButton} onClick={onClose}>
              TIL FORSIDEN
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
