export default function UserAddress(props) {
  // console.log('props ===', props);

  const { street, suite, city, zipcode } = props.data;
  return (
    <div className='card left'>
      <h4>UserAddress</h4>
      <p>street: {street}</p>
      <p>suite: {suite}</p>
      <p>city: {city}</p>
      <p>zipcode: {zipcode}</p>
    </div>
  );
}
