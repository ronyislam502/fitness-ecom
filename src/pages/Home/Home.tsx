import Banner from "../../components/ui/Banner";
import Benefits from "../../components/ui/Benefits";
import Category from "../../components/ui/Category";
import FeaturedProduct from "../../components/ui/FeaturedProduct";
import Gallery from "../../components/ui/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedProduct />
      <Benefits />
      <Gallery />
    </div>
  );
};

export default Home;
