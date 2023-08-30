export default function CompanyList(props) {
  return (
    <div>
      <h3>{props.list.name}</h3>
      <p>{props.list.catchPhrase}</p>
      <p>{props.list.website}</p>
      <p>{props.list.bs}</p>
    </div>
  );
}

// {props.list.company.name}
// {props.list.company.catchPhrase}

//   {props.list.website}
// {props.list.company.bs}
