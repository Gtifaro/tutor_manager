export function ClassList({ classes, loading }) {
  if (loading) return <p>Cargando clases...</p>;
  return (
    <ul>
      {classes &&
        classes.map((c) => {
          return <li key={c._id}>{c.test}</li>;
        })}
    </ul>
  );
}
