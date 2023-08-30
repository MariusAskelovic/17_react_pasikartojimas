import { useEffect, useState } from 'react';
import SingleUser from './SingleUser';

const url = 'https://jsonplaceholder.typicode.com/users';

export default function ApiUsers() {
  console.log('ApiUsers susigeneravo');
  const [usersArr, setUsersArr] = useState([]);

  // useEffect(funkcija, priklausomybiu masyvas)
  // atlikti kazkokius veiksmus po to kai componentas susigeneravo
  // DOM tai darom tokia useEffecte useEffect(() => {}, []);
  useEffect(() => {
    // parisisiusti duomentis ir israsyt i usersArr
    fetch(url)
      .then((resp) => resp.json())
      .then((dataInJs) => {
        console.log('dataInJs ===', dataInJs);
        setUsersArr(dataInJs);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  function handleDelete(idToDelete) {
    console.log('deleeete', idToDelete);
    fetch(url + '/' + idToDelete, {
      method: 'DELETE',
    })
      .then((resp) => {
        // console.log('resp ===', resp);
        if (resp.status === 200) {
          console.log('istrinta');
          localDelete(idToDelete);
        }
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  function localDelete(deleteId) {
    const filtered = usersArr.filter((uObj) => uObj.id !== deleteId);
    setUsersArr(filtered);
  }

  return (
    <div>
      <h2>ApiUsers</h2>

      <ul>
        {usersArr.map((uObj) => (
          <SingleUser
            key={uObj.id}
            name={uObj.name}
            email={uObj.email}
            address={uObj.address}
            onDelete={() => handleDelete(uObj.id)}
          />
        ))}
      </ul>
    </div>
  );
}

/*
## API users

ApiUsers.jsx komponente parsiusti ir atvaizduoti vartotojus is
https://jsonplaceholder.typicode.com/users

1. susikurti vartotojams state pradine reiksme tuscias masyvas.
2. tik uzsikrovus komponentui parsiusti duomenis (useEffect) ir issaugoti state
3. sukti cikla ir generuoti vartotoju korteles. Korteles atvaizduoti sia info
   ![](assets/2023-08-29-13-08-50.png)

4. adresa atvaizduoti atskiru komponentu kuris gauna info per props
5. kompanija atvaizduoti atskiru komponentu kuris gauna info per props
6. graziai stilizuojam su css

One user obj 


const a = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

*/
