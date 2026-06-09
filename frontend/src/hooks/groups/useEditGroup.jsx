import { useState, useEffect } from "react";
import { editGroup, getGroupById } from "../../services/groupServices";
import { useNavigate, useParams } from "react-router-dom";

export function useEditGroup() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [oldData, setOldData] = useState(() => {
    let data = localStorage.getItem("grouplist");
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
      let result = await editGroup(id, data);
      if (!result) throw new Error("Error editing group");
      let grouplist = JSON.parse(localStorage.getItem("grouplist"));
      let idx = grouplist.findIndex(c => c._id == id);
      grouplist[idx] = data;
      localStorage.setItem("grouplist", JSON.stringify(grouplist));
      navigate("/groups");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleGetGroupById = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getGroupById(id);
        setOldData(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    handleGetGroupById();
  }, [id]);

  return { loading, oldData, handleEdit };
}
