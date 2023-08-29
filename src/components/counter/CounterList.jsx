import Counter from './Counter';

export default function CounterList(props) {
  console.log('props ===', props);
  const mapThis = props.items;
  console.log('mapThis ===', mapThis);
  return (
    <div>
      {props.items.map((obj) => (
        <Counter key={obj.id} name={obj.name} starting={obj.starting} />
      ))}
    </div>
  );
}
