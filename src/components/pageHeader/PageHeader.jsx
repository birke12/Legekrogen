import styles from "./pageHeader.module.css";

const PageHeader = ({
  title,
  subTitle,
  question,
  headerImg,
  toy,
  headerType,
}) => {
  return (
    <header
      /* className={`${styles.header} ${header2 || ""}`} */
      className={
        headerType === "home"
          ? "homePageHeader"
          : headerType === "faq"
          ? "faqPageHeader"
          : headerType === "products"
          ? "productsPageHeader"
          : "contactPageHeader"
      }
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div
        className={`${styles.headerMainContainer} ${
          headerType === "home"
            ? styles.homeHeaderMainContainer
            : headerType === "products"
            ? styles.productsHeaderMainContainer
            : headerType === "memberpage"
            ? styles.memberpageHeaderMainContainer
            : headerType === "faq"
            ? styles.faqHeaderMainContainer
            : styles.defaultHeaderMainContainer
        }`}
      >
        {headerType === "home" && (
          <>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>{title}</h1>
              <h1 className={styles.question}>{question}</h1>
              <h3 className={styles.subTitle}>{subTitle}</h3>
            </div>
          </>
        )}
        {headerType === "products" && (
          <>
            <div className={styles.headerContainer2}>
              <h1 className={styles.title}>{title}</h1>
              <h1 className={styles.question}>{question}</h1>
              <h3 className={styles.toy}>{toy}</h3>
            </div>
          </>
        )}
        {headerType === "faq" && (
          <>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>{title}</h1>
              <h1 className={styles.question}>{question}</h1>
              <h3 className={styles.subTitle}>{subTitle}</h3>
            </div>
          </>
        )}
        {headerType === "memberpage" && (
          <>
            <div className={styles.headerContainer}>
              <h1 className={styles.title}>{title}</h1>
              <h1 className={styles.toy}>{toy}</h1>
              <h3 className={styles.subTitle}>{subTitle}</h3>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default PageHeader;

{
  /* <h1 className={styles.title}>btffbf</h1>
        <h2 className={styles.question}>{question}</h2>
        {subTitle && <h4>{subTitle}</h4>} */
}
