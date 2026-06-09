export async function createGroup(data) {
  try {
    const response = await fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error creating group");
    return response.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

export async function editGroup(id, data) {
  const response = await fetch(`http://localhost:3000/groups/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error editing group");
  return response.json();
}

export async function getGroups() {
  const response = await fetch("http://localhost:3000/groups");
  if (!response.ok) throw new Error("Error getting groups");
  return response.json();
}

export async function getGroupById(id) {
  const response = await fetch(`http://localhost:3000/groups/${id}`);
  if (!response.ok) throw new Error("Error getting group");
  return response.json();
}

export async function deleteGroup(id) {
  const response = await fetch(`http://localhost:3000/groups/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error deleting group");
}
