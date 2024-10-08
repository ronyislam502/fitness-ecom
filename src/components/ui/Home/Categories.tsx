import { useNavigate } from "react-router-dom";
import SectionTitle from "../global/SectionTitle";
import { useAppDispatch } from "../../../redux/hooks";
import { selectCategory } from "../../../redux/features/category/categorySlice";
import { categoriesArr } from "../../../utils/categoriesArr";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: string) => {
    navigate("/products"), dispatch(selectCategory(category));
  };

  // const categories = products ? getUniqueCategoriesByName(products?.data) : [];

  return (
    <div className="section-gap">
      <SectionTitle title="categories" subTitle="tools we provides" />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoriesArr?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer border p-4"
            onClick={() => handleCategoryClick(category.value)}
          >
            <img
              className=" w-full h-48 object-cover transform transition duration-500 hover:scale-110"
              src={category.image}
            />
            <h2 className="text-center text-amber-500 font-bold py-4">
              {category.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
