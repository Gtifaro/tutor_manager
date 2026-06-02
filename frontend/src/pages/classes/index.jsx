import { Link } from "react-router-dom";
import { useClasses } from "../../hooks/useClasses";

export default function ClassView() {
  const { classes, handleDelete, loading, deleteLoading, refreshClasses } = useClasses();

  return (
    <div className="classView">
      <Link to="/classes/create" className={"classView__createbtn" + (loading ? " disabledbtn" : "")} disabled={loading}>
        Crear Nueva
      </Link>
      <button className={"classView__refreshbtn" + (loading ? " disabledbtn" : "")} disabled={loading} onClick={refreshClasses}>
        Recargar datos
      </button>
      {classes?.length > 0 ? (
        <ul className="classView__classlist">
          {classes.map((c) => {
            return (
              <li key={`class-${c._id}`}>
                <span>{c.test}{" "}</span>
                <Link
                  className={"classView__editbtn" + (loading ? " disabledbtn" : "")}
                  to={`/classes/edit/${c._id}`}
                  disabled={loading}
                >
                  Editar
                </Link>
                <button
                  className={"classView__deletebtn" + (deleteLoading || loading ? " disabledbtn" : "")}
                  onClick={() => handleDelete(c._id)}
                  disabled={deleteLoading || loading}
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
