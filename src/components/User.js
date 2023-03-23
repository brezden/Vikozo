function User(props) {
  return (
    <>
      <h3>User {props.name}</h3>
      <p>{props.role ? props.role : "No Role"}</p>
    </>
  );
}

export default User;
