import { Link } from "react-router-dom";
import { useClasses } from "../../hooks/useClasses";

export default function ClassView() {
  const { classes, handleDelete, loading } = useClasses();
  if (loading) return <p>Cargando clases...</p>;
  return (
    <>
      <Link to="/classes/create">Crear nueva clase</Link>
      <ul>
        {classes &&
          classes.map((c) => {
            return (
              <li key={c._id}>
                {c.test} <Link to={`/classes/edit/${c._id}`}>Editar</Link>{" "}
                <button onClick={() => handleDelete(c._id)}>Eliminar</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
