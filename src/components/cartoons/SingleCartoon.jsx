import { useState } from 'react';
import css from './SingleCartoon.module.css';

export default function SingleCartoon(props) {
  const [sortedArr, setSortedArr] = useState(props.list);
  function sortByYear() {
    let newArr = [...sortedArr];
    newArr.sort((objA, objB) => objA.year.toString().localeCompare(objB.year));
    setSortedArr(newArr);
  }
  console.log('props ===', props.list);
  return (
    <div>
      <ul className={css.unlisted}>
        {sortedArr.map((obj) => (
          <li className={css.list} key={obj.id}>
            <div>
              <h3>{obj.title}</h3>
              <h4>{obj.director}</h4>
              {obj.wasExpensive && (
                <div className={css.expensive}>
                  <span>$$$</span>
                </div>
              )}
              <div>
                <span className={css.year}>{obj.year}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={sortByYear} className={css.button}>
        Sort by Year
      </button>
    </div>
  );
}
