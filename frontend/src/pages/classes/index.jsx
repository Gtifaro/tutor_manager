import { Link } from "react-router-dom";
import { useClasses } from "../../hooks/useClasses";

export default function ClassView() {
  const { classes, handleDelete, loading, deleteLoading } = useClasses();
  if (loading) return <p>Cargando clases...</p>;
  return (
    <>
      <Link to="/classes/create">Crear nueva clase</Link>
      {classes?.length > 0 ? (
        <ul>
          {classes.map((c) => {
            return (
              <li key={c._id}>
                {c.test} <Link to={`/classes/edit/${c._id}`}>Editar</Link>{" "}
                <button
                  onClick={() => handleDelete(c._id)}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? "Eliminando..." : "Eliminar"}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No hay clases disponibles</p>
      )}
    </>
  );
}
