import css from './Filter.module.css';
import { changeFilter } from './../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from './../../redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  return (
    <input
      className={css.inputSearch}
      type="text"
      value={filter}
      onChange={evt => dispatch(changeFilter(evt.target.value))}
      name="filter"
      placeholder="Search by name"
    />
  );
}
