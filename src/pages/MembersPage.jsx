import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/produkter.jpg";
import MembersClub from "../components/membersClub/MembersClub";




const Faq = () => {
  return (
    <section>
      <PageHeader headerType="memberpage"
        headerImg={headerImg}
        title="Bliv medlem af vores"
        toy="KUNDEKLUB"
        subTitle="og få ekslusive nyheder før alle andre"
      />
      <section >
       <MembersClub />
      </section>
    </section>
  );
};

export default Faq;
