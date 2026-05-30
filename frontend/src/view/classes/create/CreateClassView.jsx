import { useCreateClass } from "../../../controller/useCreateClass";

export function CreateClassView() {
  const { loading, handleCreate } = useCreateClass();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    handleCreate(data);
  };

  return (
    <>
      <h1>Crear clase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Test:
          <input type="text" name="test" placeholder="M1l" />
        </label>
        <button disabled={loading} type="submit">
          {loading ? "Creando..." : "Crear"}
        </button>
      </form>
    </>
  );
}
