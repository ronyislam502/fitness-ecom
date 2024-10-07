import { Link } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";
// import Loader from "../shared/Loader";
import Card from "../../shared/Card";

const FeaturedProduct = () => {
  //   const { data, isLoading } = useGetProductsQuery({});
  //   const firstFourProducts = data?.data.slice(0, 4);
  //   if (isLoading) {
  //     <Loader />;
  //   }
  return (
    <div className="section-gap">
      <SectionTitle title="Featured Products" subTitle="top selling products" />
      <Card />
      <div className="mt-10 text-center">
        <Link
          to="/products"
          className="bg-secondaryColor text-white font-bold py-3 px-5 rounded-sm hover:bg-primaryColor"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
