import { useEditClass } from "../../../hooks/classes/useEditClass";

export default function EditClassView() {
  const { loading, oldData, handleEdit } = useEditClass();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.number = parseInt(data.number)
    handleEdit(data);
  };

  return (
    <>
      <h1>Edit Class</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" name="name" defaultValue={oldData?.name || ""} />
        </label>
        <label>
          number:
          <input type="number" name="number" defaultValue={oldData?.number || ""} />
        </label>
        <label>
          group:
          <input type="text" name="group" defaultValue={oldData?.group || ""} />
        </label>
        <label>
          date:
          <input type="date" name="date" defaultValue={new Date(oldData?.date || "").toISOString().split("T")[0]} />
        </label>
        <button disabled={loading} type="submit">
          {loading ? "Guardando..." : "Editar"}
        </button>
      </form>
    </>
  );
}
