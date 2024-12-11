import styles from "./memberReviews.module.css";

const MemberReviews = () => {
  return (
    <section>
      <div className={styles.headerContainer}>
        <h3>Vores kunder</h3>
        <h2>UDTALER</h2>
      </div>
      <div className={styles.parentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.review}>
            “Pakken kom dagen efter jeg bestilte. Der blev jeg positivt
            overrasket, da der står på deres hjemmeside at leveringstiden er 2-4
            hverdage. Og min lille Hugo elsker sin nye træhest.”
          </div>
          <div className={styles.member}>- Heidi, mor til Hugo på 3 år</div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.review}>
            “Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede
            Legekrogens kundeservice, var de meget hurtige til at sende mig den
            rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget
            lækkert”
          </div>
          <div className={styles.member}>- Omar, onkel til Anton på 11 år</div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.review}>
            “Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det
            næsten en umulig opgave. Mine døtre har meget høje krav, når det
            kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget.
            Men efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg
            ikke længere problemer med at købe de perfekte julegaver. Tak til
            Legekrogen. Og Lars”
          </div>
          <div className={styles.member}>- Karsten Hansen, Morfar</div>
        </div>
      </div>
    </section>
  );
};

export default MemberReviews;
