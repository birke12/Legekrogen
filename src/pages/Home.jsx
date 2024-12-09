import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/forsiden.jpg"
import Products from "../components/products/Product";


const Home = () => {
  return (
    <article>
      <PageHeader
       title="At lege er at leve"
       subTitle="Her hos os har vi et start udvalg af legetøj i høj kvalitet"
       headerImg={headerImg}
        
      />
      <div>
        <Products />
      </div>
     
      
    </article>
  );
};

export default Home;
