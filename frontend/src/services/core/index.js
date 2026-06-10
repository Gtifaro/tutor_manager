export async function getMonthSalary () {
  const response = await fetch(`http://localhost:3000/salary`);
  if (!response.ok) throw new Error("Error getting month salary");
  return response.json();
}