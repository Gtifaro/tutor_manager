import { useEffect, useState } from "react";
import { getGroups, deleteGroup } from "../../services/groupServices";
export function useGroups() {
  const [groups, setGroups] = useState(() => {
    let data = localStorage.getItem("grouplist");
    if (!data) return [];
    return JSON.parse(data);
  });
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const result = await getGroups();
      localStorage.setItem("grouplist", JSON.stringify(result));
      setGroups(result);
    } catch (error) {
      console.error("Error al obtener los grupos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function handleGetGroups() {
      handleGetData();
    }
    handleGetGroups();
  }, []);

  const handleDelete = async (id) => {
    try {
      setDeleteLoading(true);
      await deleteGroup(id);
      setGroups((prev) => {
        const result = prev.filter((c) => c._id !== id);
        localStorage.setItem("grouplist", JSON.stringify(result));
        return result;
      });
    } catch (error) {
      console.error("Error al eliminar el grupo:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const refreshGroups = () => {
    handleGetData();
  };

  return { groups, loading, handleDelete, deleteLoading, refreshGroups };
}
