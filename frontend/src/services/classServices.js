export async function createClass(data) {
  const response = await fetch("http://localhost:3000/classes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error creating class");
  return response.json();
}

export async function editClass(id, data) {
  const response = await fetch(`http://localhost:3000/classes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error editing class");
  return response.json();
}

export async function getClasses() {
  const response = await fetch("http://localhost:3000/classes");
  if (!response.ok) throw new Error("Error getting classes");
  return response.json();
}

export async function getClassById(id) {
  const response = await fetch(`http://localhost:3000/classes/${id}`);
  if (!response.ok) throw new Error("Error getting class");
  return response.json();
}

export async function deleteClass(id) {
  const response = await fetch(`http://localhost:3000/classes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error deleting class");
}
