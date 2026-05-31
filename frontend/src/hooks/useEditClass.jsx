import { useState, useEffect } from "react";
import { editClass, getClassById } from "../services/classServices";
import { useNavigate, useParams } from "react-router-dom";

export function useEditClass() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [oldData, setOldData] = useState(null);
  const navigate = useNavigate();

  const handleEdit = async (data) => {
    if (!id) return;
    setLoading(true);
    try {
      await editClass(id, data);
      navigate("/classes");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleGetClassById = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getClassById(id);
        setOldData(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    handleGetClassById();
  }, [id]);

  return { loading, oldData, handleEdit };
}
