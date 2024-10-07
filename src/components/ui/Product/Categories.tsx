import {
  removeCategory,
  setCategory,
} from "../../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { categoriesArr } from "../../../utils/categoriesArr";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state: RootState) => state.filters);
  const handleCategoryChange = (category: string) => {
    if (categories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(setCategory(category));
    }
  };
  return (
    <>
      <div className="grid space-y-4 p-4 items-center">
        {categoriesArr.map((category) => (
          <label key={category.label} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox border-red-400"
              onChange={() => handleCategoryChange(category.label)}
            />
            <span>{category.label}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Categories;
