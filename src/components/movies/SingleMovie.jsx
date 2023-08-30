import css from './SingleMovie.module.css';
export default function SingleMovie(props) {
  return (
    <li className={css.list}>
      <h2 className={css.movieTitle}>
        {props.list.title}{' '}
        <span className={css.movieYear}>{props.list.year}</span>
      </h2>

      <h3 className={css.movieDirector}>{props.list.director}</h3>
      {props.list.wasExpensive && <p className={css.expensive}>BIG BUDGET</p>}
    </li>
  );
}
