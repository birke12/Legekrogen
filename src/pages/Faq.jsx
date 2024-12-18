import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/produkter.jpg";
import styles from "../components/faq/faq.module.css";
import Accordion from "../components/accordion/Accordion";

const Faq = () => {
  return (
    <section>
      <PageHeader headerType="faq"
        headerImg={headerImg}
        title="Har du nogle"
        question="SPØRGSMÅL?"
        subTitle="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os"
      />
      <section className={styles.accordionSec}>
        <Accordion
          title="Hvor lang tid er leveringstiden?"
          content="2-4 hverdage. Det kan tage længere tid op til højtider og helligdage."
        />
        <Accordion
          title="Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?"
          content={
            <>
              <p>Vil prismatcher på følgende parametre:</p>{" "}
              <div>
                <li>Prisen skal gælde på handelstidspunktet.</li>
                <li>Varen skal være i samme model, farve og evt. størrelse.</li>
                <li>
                  Varen skal være på lager hos konkurrenten på tidspunktet for
                  prismatch.
                </li>
              </div>
            </>
          }
        />

        <Accordion
          title="Hvor lang tid har jegtil at returnere?"
          content="Vi tilbyder 30 dages retur/bytteret fra den dag, hvor du modtager varerne."
        />
      </section>
    </section>
  );
};

export default Faq;
