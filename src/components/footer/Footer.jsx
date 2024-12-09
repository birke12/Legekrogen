import styles from "../footer/footer.module.css";
/* import emailIcon from "../assets/icons/emailIcon.png";  */
/* import phoneIcon from "../assets/icons/phoneIcon.png"; */

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Member Club Section */}
        <div className={styles.memberClub}>
          <p>Kunne du også tænke dig at blive medlem af vores</p>
          <h3>Kunderklub</h3>
          <button className={styles.memberButton}>Bliv medlem</button>
        </div>

        {/* Customer Service Section */}
        <div className={styles.memberService}>
          <h3>Kundeservice</h3>

          {/* Contact via Email */}
          <div className={styles.iconFooter}>
            {/* <img src={emailIcon} alt="Email icon" /> */}
            <a href="mailto:kontakt@legekrogen.dk">kontakt@legekrogen.dk</a>
          </div>

          {/* Contact via Phone */}
          <div className={styles.iconFooter}>
            {/* <img src={phoneIcon} alt="Phone icon" /> */}
            <a href="tel:+4523456789">+ 45 23 45 67 89</a>
          </div>
          <h3>Følg os</h3>
          <div className={styles.socialIcons}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
