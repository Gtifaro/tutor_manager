import { useState, useEffect } from "react";
import {getMonthSalary} from "../services/core";

export default function useNumber() {
  const [number, setNumber] = useState(32);

  useEffect(() => {
    const handleGetMonthSalary = async () => {
      let result = await getMonthSalary();
      setNumber(result.salary);
    }
    handleGetMonthSalary()
  }, []);
  return { number: number };
}

// https://wiki.kodland.org/s/798fe6a9-db34-486b-9584-c84c921d939e

// https://wiki.kodland.org/s/0b050e9e-5e42-4191-b2fe-2572fce442b0
