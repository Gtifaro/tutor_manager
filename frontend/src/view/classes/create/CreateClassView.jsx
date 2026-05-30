export function CreateClassView() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
  };

  return (
    <>
      <h1>Crear clase</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Test:
          <input type="text" name="test" placeholder="M1l" />
        </label>
        <button type="submit">Crear</button>
      </form>
    </>
  );
}
