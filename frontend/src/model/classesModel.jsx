export async function createClass(data) {
  const response = await fetch("http://localhost:3000/classes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error creating class");
  return response.json();
}

export async function fetchClasses() {
  const response = await fetch("http://localhost:3000/classes");
  if (!response.ok) throw new Error("Error creating classe");
  return response.json();
}