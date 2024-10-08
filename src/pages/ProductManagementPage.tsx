import { NavLink } from "react-router-dom";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/features/product/productApi";
import { TProduct } from "../types";
import { toast } from "sonner";

const ProductManagementPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  //handle delete
  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product deleted successfully");
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold py-4">
        Products: {products?.data?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="font-bold text-2xl text-black text-center">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>EDIT</th>
              <th>Action</th>
            </tr>
          </thead>
          <hr />
          <tbody className="text-black">
            {products?.data?.map((product: TProduct, index: number) => (
              <tr className="text-center">
                <th>{index + 1}</th>
                <td>{product?.name}</td>
                <td>$ {product.price}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>
                  <NavLink to={`/products/update/${product._id}`}>
                    <button className="btn btn-outline btn-accent">
                      Update
                    </button>
                  </NavLink>
                </td>
                <td>
                  <button
                    className=" btn btn-outline btn-error"
                    onClick={() => handleDelete(product._id!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <NavLink to="/products/create-product">
            <button className="btn btn-outline btn-success">
              Create New Product
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
