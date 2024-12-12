import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/forsiden.jpg";
import MemberReviews from "../components/memberReviews/MemberReviews";
import FavProducts from "../components/favProducts/FavProducts";

const Home = () => {
  return (
    <article>
      <PageHeader
        title="At lege er at leve"
        subTitle="Her hos os har vi et start udvalg af legetøj i høj kvalitet"
        headerImg={headerImg}
      />
      <div>
        <FavProducts />
      </div>
      <div>
        <MemberReviews />
      </div>
    </article>
  );
};

export default Home;
