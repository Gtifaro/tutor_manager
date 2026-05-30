export async function fetchClasses() {
  const response = await fetch("http://localhost:3000/classes");
  if (!response.ok) throw new Error("Error fetching classes");
  return await response.json();
}
