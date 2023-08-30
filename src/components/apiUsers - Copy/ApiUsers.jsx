import UsersList from './UsersList';
import { Fragment, useEffect, useState } from 'react';

export default function ApiUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [stateArr, setStateArr] = useState([]);

  function handleDelete() {
    console.log('handleDelete');
  }

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
    <Fragment>
      <UsersList list={stateArr} />
    </Fragment>
  );
}
