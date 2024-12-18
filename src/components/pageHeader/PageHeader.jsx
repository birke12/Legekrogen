import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, question, headerImg, header2 }) => {
  return (
    <header
      className={`${styles.header} ${header2 || ""}`}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.question}>{question}</h2>
        {subTitle && <h4>{subTitle}</h4>}
      </div>
    </header>
  );
};

export default PageHeader;
