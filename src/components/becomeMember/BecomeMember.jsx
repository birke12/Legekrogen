import { Link } from "react-router-dom";
import styles from "./becomeMember.module.css"

const BecomeMember = () => {
    return (
      <div className={styles.memberClub}>
        <p>Kunne du også tænke dig at blive medlem af vores</p>
        <h3>Kundeklub</h3>
        <Link to="/memberspage">
        <button className={styles.memberButton}>BLIV MEDLEM NU!</button>
        
        </Link>
      </div>
    );
}

export default BecomeMember