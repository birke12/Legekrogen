import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/produkter.jpg";
import MembersClub from "../components/membersClub/MembersClub";




const Faq = () => {
  return (
    <section>
      <PageHeader
        headerImg={headerImg}
        title="Ofte stillede spørgsmål"
        subTitle="FAQ"
      />
      <section >
       <MembersClub />
      </section>
    </section>
  );
};

export default Faq;
