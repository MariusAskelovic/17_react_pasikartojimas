import css from './CartoonsList.module.css';
import SingleCartoon from './SingleCartoon';

const cartoons = [
  {
    id: 1,
    title: 'SpongeBob SquarePants',
    year: 1999,
    director: 'Stephen Hillenburg',
    wasExpensive: false,
  },
  {
    id: 2,
    title: 'Looney Tunes',
    year: 1930,
    director: 'Various',
    wasExpensive: false,
  },
  {
    id: 3,
    title: 'Avatar: The Last Airbender',
    year: 2005,
    director: 'Michael Dante DiMartino, Bryan Konietzko',
    wasExpensive: true,
  },
  {
    id: 4,
    title: 'Scooby-Doo, Where Are You!',
    year: 1969,
    director: 'Joe Ruby, Ken Spears',
    wasExpensive: false,
  },
  {
    id: 5,
    title: 'Tom and Jerry',
    year: 1940,
    director: 'William Hanna, Joseph Barbera',
    wasExpensive: false,
  },
];

export default function CartoonsList() {
  //   console.table(cartoons);

  return (
    <div className={css.div}>
      <SingleCartoon list={cartoons} />
    </div>
  );
}
