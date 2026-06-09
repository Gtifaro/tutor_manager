import { useEditGroup } from "../../../hooks/groups/useEditGroup";

export default function EditGroupView() {
  const { loading, oldData, handleEdit } = useEditGroup();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.number = parseInt(data.number)
    handleEdit(data);
  };

  return (
    <>
      <h1>Edit Group</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" name="name" defaultValue={oldData?.name || ""} />
        </label>
        <button disabled={loading} type="submit">
          {loading ? "Guardando..." : "Editar"}
        </button>
      </form>
    </>
  );
}
