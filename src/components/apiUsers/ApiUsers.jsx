import { useEffect, useState } from 'react';
import css from './ApiUsers.module.css';

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
    <div className={css.section}>
      <ul className={css.unlisted}>
        {stateArr.map((obj) => (
          <li className={css.list} key={obj.id}>
            <h3 className={css.title}>
              <span className={css.id}>{obj.id}</span> {obj.username}
            </h3>
            <h3>{obj.name}</h3>
            <p>
              <a href={`mailto:${obj.email}`}>{obj.email}</a>{' '}
            </p>
            <div className={css.flexTables}>
              <table className={css.table}>
                {/* <thead className={css.thead}> */}
                <tr>
                  <th>Street</th>
                  <td>{obj.address.street}</td>
                  <th>Website</th>
                  <td>
                    <a
                      className={css.link}
                      href={`http://${obj.website}`}
                      target={'_blank'}
                      rel='noreferrer'
                    >
                      {obj.website}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Suite</th>
                  <td>{obj.address.suite}</td>
                  <th>Company</th>
                  <td>{obj.company.name}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{obj.address.city}</td>
                  <th>Catch Phrase</th>
                  <td>{obj.company.catchPhrase}</td>
                </tr>
                <tr>
                  <th>Zipcode</th>
                  <td>{obj.address.zipcode}</td>
                  <th>BS</th>
                  <td>{obj.company.bs}</td>
                </tr>
              </table>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
