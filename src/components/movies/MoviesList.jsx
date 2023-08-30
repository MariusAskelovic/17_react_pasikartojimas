import { useState } from 'react';
import css from './MoviesList.module.css';
import SingleMovie from './SingleMovie';

const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    wasExpensive: true,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    wasExpensive: false,
  },
  {
    id: 3,
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    wasExpensive: true,
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    wasExpensive: true,
  },
  {
    id: 5,
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    wasExpensive: false,
  },
];

export default function MoviesList() {
  const [filteredArr, setFilteredArr] = useState(movies);

  function filterArr() {
    let newArr = [];
    newArr = movies.filter((obj) => obj.wasExpensive);
    setFilteredArr(newArr);
  }
  // pridedam i masyva indexus
  // const moviewsWithId = movies.map((movieObj, idx) => {
  //   return {
  //     id: idx + 1,
  //     ...movieObj,
  //   };
  // });
  // galima is console log copy paste
  // console.log(JSON.stringify(moviewsWithId, null, 2));
  return (
    <div className={css.div}>
      <h2>MoviesList</h2>

      <fieldset>
        <legend>Filters</legend>
        <button onClick={filterArr}>Expensive movies</button>
        <p>Active Filters:</p>
      </fieldset>
      <ul className={css.unlisted}>
        {filteredArr.map((obj) => (
          <SingleMovie key={obj.id} list={obj} />
        ))}
      </ul>
    </div>
  );
}
