import { useState } from "react";
import { createClass } from "../services/classServices";
import { useNavigate } from "react-router-dom";

export function useCreateClass() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCreate = async (data) => {
    setLoading(true);
    try {
      await createClass(data);
      navigate("/classes");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return { loading, handleCreate };
}
