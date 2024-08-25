import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { filteredContact } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const filters = useSelector(filteredContact);
  const dispatch = useDispatch();
  return (
    <div className={s.form}>
      <p>Find contact by name:</p>
      <input
        type="text"
        value={filters}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
