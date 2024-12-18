import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Customer Service Section */}
        <div className={styles.memberService}>
          <h3 className={styles.service}>Kundeservice</h3>

          {/* Contact via Email */}
          <div className={styles.iconFooter}>
            <a href="mailto:kontakt@legekrogen.dk">kontakt@legekrogen.dk</a>
          </div>

          {/* Contact via Phone */}
          <div className={styles.iconFooter}>
            <a href="tel:+4523456789">+ 45 23 45 67 89</a>
          </div>

          <h3 className={styles.follow}>Følg os</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.socialIcon} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
