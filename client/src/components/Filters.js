import {useState} from 'react';
import {useStore} from '../store/store.context';
import {fetchUsers} from '../store/users/user.actions';

export const Filters = () => {
  const [filters, setFilters] = useState({});
  const {attributeState, userDispatcher} = useStore();
  const {attributes} = attributeState;

  const onInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  const onFilterUsers = () => {
    const cleanFilters = {...filters};
    for (let key of Object.keys(cleanFilters)) {
      if (cleanFilters[key].trim() === '') {
        delete cleanFilters[key];
      }
    }
    const qs = new URLSearchParams(cleanFilters).toString();
    fetchUsers(userDispatcher, qs);
  }

  return (
    <div className="App-filters">
      <div><strong>Filters</strong></div>
      <div>
      {attributes.map((attr, idx) => (
        <div key={idx}>
          {attr.key}:{' '} 
          {attr.type === 'boolean' ? (
            <select name={attr.key} onChange={onInputChange}>
              <option value=''>Choose an option</option>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </select>
          ) : (
            <input type="text" name={attr.key} onChange={onInputChange} />
          )}
        </div>
      ))}
      </div>
      <button onClick={onFilterUsers}>Filter Users</button>
    </div>
  );

}