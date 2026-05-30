import { Link } from "react-router-dom";
import { useClasses } from "../../controller/useClasses";

export function ClassView() {
  const { classes, loading } = useClasses();
  if (loading) return <p>Cargando clases...</p>;
  return (
    <>
      <Link to="/classes/create">Crear nueva clase</Link>
      <ul>
        {classes &&
          classes.map((c) => {
            return (
              <li key={c._id}>
                {c.test} <Link to={`/classes/edit/${c._id}`}>Editar</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
