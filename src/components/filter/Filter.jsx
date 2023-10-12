import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { FilterInput, Label } from './Filter.style';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = evt => dispatch(filterContact(evt.target.value));

  return (
    <Label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
