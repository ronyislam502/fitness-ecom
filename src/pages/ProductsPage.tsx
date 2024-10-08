import { useNavigate } from "react-router-dom";
// import Hero from "../components/ui/about/Hero";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import Category from "../components/ui/Products/Catergory";
import ClearFilterButton from "../components/ui/Products/ClearFilterButton";
import Sorting from "../components/ui/Products/Sorting";
// import { useGetProductsQuery } from "../redux/api/baseApi";
import { clearCategory } from "../redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";
import { useGetProductsQuery } from "../redux/features/product/productApi";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //view details  button functionality
  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };
  // grab category name from local state
  const selectedCategory = useAppSelector(
    (state: RootState) => state.category.category
  );

  // grab filtering value from local state
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );
  //fetching data
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    category: selectedCategory,
    searchTerm,
    sort,
    categories,
  });
  // reset filters
  const handleFilterReset = () => {
    dispatch(clearCategory());
  };
  //if state is loading return loading page
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ProgressBar></ProgressBar>
      </div>
    );
  }
  //if state is error return error page
  if (error) {
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorPage></ErrorPage>
      </div>
    );
  }

  return (
    <div className="flex lg:flex gap-6">
      <div className="p-4">
        <Sorting />
        <Category />
        <ClearFilterButton />
      </div>
      {selectedCategory && (
        <div className="mb-4 lg:pl-16">
          <span className="lg:text-lg text-gray-500 mr-2">
            Category: {selectedCategory}
          </span>
          <button
            className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleFilterReset}
          >
            Clear Filter
          </button>
        </div>
      )}
      <div className="grid lg:grid-cols-3 gap-4 mt-6 p-6">
        {products?.data?.map((product: TProduct) => (
          <div key={product._id} className="card bg-base-100 shadow-xl">
            <img src={product?.image} alt="Shoes" className="rounded-xl" />

            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <p>{product?.price}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleViewDetails(product?._id as string)}
                  className="btn btn-primary"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
