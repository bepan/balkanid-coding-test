import {useEffect} from 'react';
import {useStore} from './store/store.context';
import {fetchAttributes} from './store/attributes/attribute.actions';
import {fetchUsers} from './store/users/user.actions';
import './App.css';
import { ToggleColumns } from './components/ToggleColumns';
import { Filters } from './components/Filters';

function App() {
  const {
    attributeState, 
    attributeDispatcher, 
    userState, 
    userDispatcher} = useStore();
  const {visibleAttributes} = attributeState;
  const {users} = userState;

  useEffect(() => {
    fetchAttributes(attributeDispatcher);
    fetchUsers(userDispatcher);
  }, []);

  return (
    <div className="App">
      <div>
        <ToggleColumns />
        <Filters />
      </div>

      <table>
        <thead>
          <tr>
            {visibleAttributes.map((attr, idx) => (
              <th key={idx}>{attr.key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              {visibleAttributes.map(attr => (
                <td key={attr.key}>{user[attr.key].toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default App;
