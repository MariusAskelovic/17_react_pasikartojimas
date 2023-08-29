import css from './SingleBook.module.css';
export default function SingleBook(props) {
  return (
    <div>
      {props.list.map((obj) => (
        <li className={css.li} key={obj.title}>
          <h3 className={css.bookTitle}>{obj.title}</h3>
          <p className={css.bookDate}>{obj.year}</p>
          <p className={css.bookAuthor}>
            <i>{obj.author}</i>
          </p>
          {obj.isOnSale && <p className={css.sale}>On Sale Now</p>}
        </li>
      ))}
    </div>
  );
}
