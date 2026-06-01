import { Link } from "react-router-dom";
import { useClasses } from "../../hooks/useClasses";

export default function ClassView() {
  const { classes, handleDelete, loading, deleteLoading } = useClasses();
  if (loading) return <p>Cargando clases...</p>;
  return (
    <div className="classView">
      <Link to="/classes/create" className="classView__createbtn">
        Crear Nueva
      </Link>
      {classes?.length > 0 ? (
        <ul className="classView__classlist">
          {classes.map((c) => {
            return (
              <li key={c._id}>
                {c.test}{" "}
                <Link
                  className="classView__editbtn"
                  to={`/classes/edit/${c._id}`}
                >
                  Editar
                </Link>
                <button
                  className="classView__deletebtn"
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
    </div>
  );
}
