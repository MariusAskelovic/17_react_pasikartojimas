import ApiUsers from './components/apiUsers/ApiUsers';
import BooksList from './components/books/BooksList';
import Cartoons from './components/cartoons/CartoonsList';
import CounterList from './components/counter/CounterList';
import MoviesList from './components/movies/MoviesList';

const counterArr = [
  { id: 1, name: 'Birds' },
  { id: 2, name: 'Push ups', starting: 6 },
  { id: 3, name: 'Pull ups', starting: 2 },
  { id: 4, starting: 100 },
];

export default function App() {
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      {!true && <CounterList items={counterArr} />}
      {false && <BooksList />}
      {false && <MoviesList />}
      {false && <Cartoons />}
      {true && <ApiUsers />}
    </div>
  );
}
