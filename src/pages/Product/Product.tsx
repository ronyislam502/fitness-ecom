import Card from "../../components/shared/Card";
import Categories from "../../components/ui/Product/Categories";
import ClearFilterBtn from "../../components/ui/Product/ClearFilterBtn";
import Sorting from "../../components/ui/Product/Sorting";

const Product = () => {
  return (
    <div className="lg:flex gap-6">
      <div className="p-4">
        <Sorting />
        <Categories />
        <ClearFilterBtn />
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
