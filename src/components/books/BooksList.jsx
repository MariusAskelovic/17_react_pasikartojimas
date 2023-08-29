import css from './BooksList.module.css';
import SingleBook from './SingleBook';

const booksArr = [
  {
    title: 'The Great Gatsby',
    year: 1925,
    author: 'F. Scott Fitzgerald',
    isOnSale: true,
  },
  {
    title: 'To Kill a Mockingbird',
    year: 1960,
    author: 'Harper Lee',
    isOnSale: false,
  },
  {
    title: '1984',
    year: 1949,
    author: 'George Orwell',
    isOnSale: true,
  },
  {
    title: 'Pride and Prejudice',
    year: 1813,
    author: 'Jane Austen',
    isOnSale: true,
  },
  {
    title: 'The Hobbit',
    year: 1937,
    author: 'J.R.R. Tolkien',
    isOnSale: false,
  },
];

export default function BooksList() {
  return (
    <div className={css.div}>
      <h2 className={css.listTitle}>BooksList</h2>
      <ul className={css.unlisted}>
        <SingleBook list={booksArr} />
      </ul>
    </div>
  );
}
