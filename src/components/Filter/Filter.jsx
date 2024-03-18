// import css from './Filter.module.css';
import { changeFilter } from './../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from './../../redux/selectors';
import { Input } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);


  return (
    <Input
      type="text"
      value={filter}
      onChange={evt => dispatch(changeFilter(evt.target.value))}
      name="filter"
      placeholder="Search by name"
    />
  );
  // return (
  //   <input
  //     className={css.inputSearch}
  //     type="text"
  //     value={filter}
  //     onChange={evt => dispatch(changeFilter(evt.target.value))}
  //     name="filter"
  //     placeholder="Search by name"
  //   />
  // );
}
