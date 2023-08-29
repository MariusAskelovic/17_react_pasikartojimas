import UsersList from './UsersList';
import { useEffect, useState } from 'react';

export default function ApiUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [stateArr, setStateArr] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.table(data);
        setStateArr(data);
      })
      .catch(console.warn);
  }, []);
  return (
    <div>
      <UsersList list={stateArr} />
    </div>
  );
}
