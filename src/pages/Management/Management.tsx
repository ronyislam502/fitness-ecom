import UpdateProduct from "../../components/ui/Management/UpdateProduct";
import UploadedProduct from "../../components/ui/Management/UploadedProduct";
import UploadProduct from "../../components/ui/Management/UploadProduct";

const Management = () => {
  return (
    <div>
      <div className="lg:flex gap-20">
        <UploadProduct />
        <UpdateProduct />
      </div>
      <UploadedProduct />
    </div>
  );
};

export default Management;
