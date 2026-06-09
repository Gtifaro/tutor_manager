import { Link } from "react-router-dom";
import { useGroups } from "../../hooks/groups/useGroups";

export default function GroupView() {
  const { groups, handleDelete, loading, deleteLoading, refreshGroups } = useGroups();

  return (
    <div className="groupView">
      <Link to="/groups/create" className={"groupView__createbtn" + (loading ? " disabledbtn" : "")} disabled={loading}>
        Crear Nuevo
      </Link>
      <button className={"groupView__refreshbtn" + (loading ? " disabledbtn" : "")} disabled={loading} onClick={refreshGroups}>
        Recargar datos
      </button>
      {groups?.length > 0 ? (
        <ul className="groupView__grouplist">
          {groups.map((g) => {
            return (
              <li key={`group-${g._id}`}>
                <span>{g.name}</span>
                <Link
                  className={"groupView__editbtn" + (loading ? " disabledbtn" : "")}
                  to={`/groups/edit/${g._id}`}
                  disabled={loading}
                >
                  Editar
                </Link>
                <button
                  className={"groupView__deletebtn" + (deleteLoading || loading ? " disabledbtn" : "")}
                  onClick={() => handleDelete(g._id)}
                  disabled={deleteLoading || loading}
                >
                  {deleteLoading ? "Eliminando..." : "Eliminar"}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No hay grupos disponibles</p>
      )}
    </div>
  );
}
