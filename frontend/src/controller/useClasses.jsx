import { useEffect, useState } from "react";
import { fetchClasses } from "../model/classesModel";
export function UseClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getClasses() {
      setLoading(true);
      try {
        const result = await fetchClasses();
        setClasses(result);
      } catch (error) {
        console.error("Error al obtener las clases:", error);
      } finally {
        setLoading(false);
      }
    }
    getClasses();
  }, []);

  return { classes, setClasses, loading };
}
