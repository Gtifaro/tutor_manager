export function ClassList({ classes }) {
  return (
    <ul>
      {classes &&
        classes.map((c) => {
          return <li key={c._id}>{c.test}</li>;
        })}
    </ul>
  );
}
