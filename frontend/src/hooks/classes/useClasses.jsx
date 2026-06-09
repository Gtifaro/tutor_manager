import { useEffect, useState } from "react";
import { getClasses, deleteClass } from "../../services/classServices";
export function useClasses() {
  const [classes, setClasses] = useState(() => {
    let data = localStorage.getItem("classlist");
    if (!data) return [];
    return JSON.parse(data);
  });
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleGetData = async () => {
    setLoading(true);
    try {
      const result = await getClasses();
      localStorage.setItem("classlist", JSON.stringify(result));
      setClasses(result);
    } catch (error) {
      console.error("Error al obtener las clases:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function handleGetClasses() {
      handleGetData();
    }
    handleGetClasses();
  }, []);

  const handleDelete = async (id) => {
    try {
      setDeleteLoading(true);
      await deleteClass(id);
      setClasses((prev) => {
        const result = prev.filter((c) => c._id !== id);
        localStorage.setItem("classlist", JSON.stringify(result));
        return result;
      });
    } catch (error) {
      console.error("Error al eliminar la clase:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const refreshClasses = () => {
    handleGetData();
  };

  return { classes, loading, handleDelete, deleteLoading, refreshClasses };
}
