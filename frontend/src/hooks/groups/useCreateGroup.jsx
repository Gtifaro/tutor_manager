import { useState } from "react";
import { createGroup } from "../../services/groupServices";
import { useNavigate } from "react-router-dom";

export function useCreateGroup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCreate = async (data) => {
    setLoading(true);
    let groups = JSON.parse(localStorage.getItem("grouplist"));
    try {
      let result = await createGroup(data);
      if(!result) return
      groups.push(data);
      localStorage.setItem("grouplist", JSON.stringify(groups));
      navigate("/groups");
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return { loading, handleCreate };
}
