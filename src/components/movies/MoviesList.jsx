import { useState } from 'react';
import css from './MoviesList.module.css';

const movies = [
  {
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    wasExpensive: true,
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    wasExpensive: false,
  },
  {
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    wasExpensive: true,
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    wasExpensive: true,
  },
  {
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
    console.log('filteredArr ===', filteredArr);
  }
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
          <li className={css.list} key={obj.title}>
            <h2 className={css.movieTitle}>
              {obj.title} <span className={css.movieYear}>{obj.year}</span>
            </h2>

            <h3 className={css.movieDirector}>{obj.director}</h3>
            {obj.wasExpensive && <p className={css.expensive}>BIG BUDGET</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
