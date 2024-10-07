import Banner from "../../components/ui/Home/Banner";
import Benefits from "../../components/ui/Home/Benefits";
import Category from "../../components/ui/Home/Category";
import FeaturedProduct from "../../components/ui/Home/FeaturedProduct";
import Gallery from "../../components/ui/Home/Gallery";

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
