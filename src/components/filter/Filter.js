import { nanoid } from 'nanoid';
import { Box } from 'styles/Box';
import { Header, Label, Input } from 'components/filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { value } = e.currentTarget;

    if (value && value.length > 0) {
      dispatch(changeFilter(value));
    } else {
      dispatch(changeFilter(''));
    }
  };

  return (
    <Box display="block">
      <Header>Search</Header>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Label htmlFor={filterInputId}>Find contact by name:</Label>
        <Input
          type="text"
          name="filter"
          placeholder="Peter Pen"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={filter}
          id={filterInputId}
          autoComplete="off"
        />
      </Box>
    </Box>
  );
};
