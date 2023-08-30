export default function AddressList(props) {
  //   console.log('adddressss props ', props);
  return (
    <div>
      <h3>{props.list.street}</h3>
      <p>{props.list.suite}</p>
      <p>{props.list.city}</p>
      <p>{props.list.zipcode}</p>
    </div>
  );
}
