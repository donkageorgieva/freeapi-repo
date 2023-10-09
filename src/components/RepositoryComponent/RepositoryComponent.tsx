import { useEffect, useState } from "react";
import axios from "axios";

const RepositoryComponent = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_API_BASE_URL}entries`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => response)
      .then((result: any) => {
        setData(result.data);
      });
  }, [setData]);

  return (
    data.entries.length > 0 &&
    data.entries.map((item: any) => (
      <li key={item.API + item.Link}>{item.API}</li>
    ))
  );
};

export default RepositoryComponent;
