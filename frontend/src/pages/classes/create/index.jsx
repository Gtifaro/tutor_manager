import { useCreateClass } from "../../../hooks/classes/useCreateClass";
export default function CreateClassView() {
  const { loading, handleCreate } = useCreateClass();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.number = parseInt(data.number);
    handleCreate(data);
  };

  return (
    <>
      <h1>Crear clase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" name="name" placeholder="M1l1" />
        </label>
        <label>
          number:
          <input type="number" name="number" placeholder="30" />
        </label>
        <label>
          group:
          <input type="text" name="group" placeholder="MA-10" />
        </label>
        <label>
          date:
          <input type="date" name="date" placeholder="2023-01-01" />
        </label>
        <button disabled={loading} type="submit">
          {loading ? "Creando..." : "Crear"}
        </button>
      </form>
    </>
  );
}
