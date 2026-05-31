import { useEffect, useState } from "react";
import { getClasses, deleteClass } from "../services/classServices";
export function useClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      await deleteClass(id);
      setClasses(classes.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error al eliminar la clase:", error);
    } finally {
      setLoading(false);
    }
  };

  return { classes, loading, handleDelete };
}
