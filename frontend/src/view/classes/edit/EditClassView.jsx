import { useEditClass } from "../../../controller/useEditClass";

export function EditClassView() {
  const { loading, oldData, handleEdit } = useEditClass();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    handleEdit(data);
  };

  return (
    <>
      <h1>Edit Class</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Test:
          <input name="test" placeholder={oldData?.test || ""} />
        </label>
        <button disabled={loading} type="submit">
          {loading ? "Guardando..." : "Editar"}
        </button>
      </form>
    </>
  );
}
