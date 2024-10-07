import { setSort } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hook";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      dispatch(setSort({ sort: "-price" }));
    }
    if (event.target.value === "desc") {
      dispatch(setSort({ sort: "price" }));
    }
  };
  return (
    <>
      <div className="p-4">
        <label className="p-4">Sort By Price</label>
        <select
          className="select select-bordered border-red-500"
          onChange={handleSortChange}
        >
          <option value="">Price</option>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
    </>
  );
};

export default Sorting;
