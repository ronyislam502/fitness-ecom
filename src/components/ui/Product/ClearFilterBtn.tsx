import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hook";

const ClearFilterBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <button
        className="btn btn-outline btn-success"
        onClick={() => dispatch(clearFilters())}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ClearFilterBtn;
