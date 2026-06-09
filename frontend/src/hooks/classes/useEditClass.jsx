import { useState, useEffect } from "react";
import { editClass, getClassById } from "../../services/classServices";
import { useNavigate, useParams } from "react-router-dom";

export function useEditClass() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [oldData, setOldData] = useState(() => {
    let data = localStorage.getItem("classlist");
    if (data) {
      data = JSON.parse(data);
      data = data.find(d => d._id == id)
    }
    return data;
  });
  const navigate = useNavigate();

  const handleEdit = async (data) => {
    if (!id) return;
    setLoading(true);
    try {
      let result = await editClass(id, data);
      if (!result) throw new Error("Error editing class");
      let classlist = JSON.parse(localStorage.getItem("classlist"));
      let idx = classlist.findIndex(c => c._id == id);
      classlist[idx] = data;
      localStorage.setItem("classlist", JSON.stringify(classlist));
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
