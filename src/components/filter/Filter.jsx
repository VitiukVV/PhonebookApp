import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterInput, Label } from './Filter.style';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChange = evt => dispatch(filterContact(evt.target.value));

  return (
    <Label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
