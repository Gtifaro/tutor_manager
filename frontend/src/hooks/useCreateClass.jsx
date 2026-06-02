import { useState } from "react";
import { createClass } from "../services/classServices";
import { useNavigate } from "react-router-dom";

export function useCreateClass() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCreate = async (data) => {
    setLoading(true);
    let classes = JSON.parse(localStorage.getItem("classlist"));
    try {
      let result = await createClass(data);
      if(!result) return
      classes.push(data);
      localStorage.setItem("classlist", JSON.stringify(classes));
      navigate("/classes");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return { loading, handleCreate };
}
