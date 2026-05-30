import { useEffect, useState } from "react";
import { getClasses } from "../model/classesModel";
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

  return { classes, setClasses, loading };
}
