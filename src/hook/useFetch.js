import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setdata(json);
        seterror(null);
      } catch (error) {
        console.log("fetching error");
        seterror("Error: fetching error");
      }
    };
    fetchdata();
  }, [url]);
  return { data, error };
}
export default useFetch;



