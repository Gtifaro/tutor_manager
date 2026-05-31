import { useEffect, useState } from "react";
import { getClasses, deleteClass } from "../services/classServices";
export function useClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  useEffect(() => {
    async function handleGetClasses() {
      setLoading(true);
      try {
        const result = await getClasses();
        setClasses(result);
      } catch (error) {
        console.error("Error al obtener las clases:", error);
      } finally {
        setLoading(false);
      }
    }
    handleGetClasses();
  }, []);

  const handleDelete = async (id) => {
    try {
      setDeleteLoading(true);
      await deleteClass(id);
      setClasses(prev => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error al eliminar la clase:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return { classes, loading, handleDelete, deleteLoading };
}
