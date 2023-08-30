import { useState } from 'react';
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
  const [activeComponent, setActiveComponent] = useState(5);
  return (
    <div className='container'>
      <h1>Pasikartojimas</h1>
      <fieldset>
        <button onClick={() => setActiveComponent(1)}>Counters</button>
        <button onClick={() => setActiveComponent(2)}>Books</button>
        <button onClick={() => setActiveComponent(3)}>Movies</button>
        <button onClick={() => setActiveComponent(4)}>Cartoons</button>
        <button onClick={() => setActiveComponent(5)}>ApiUsers</button>
      </fieldset>
      {activeComponent === 1 && <CounterList items={counterArr} />}
      {activeComponent === 2 && <BooksList />}
      {activeComponent === 3 && <MoviesList />}
      {activeComponent === 4 && <Cartoons />}
      {activeComponent === 5 && <ApiUsers />}
    </div>
  );
}
