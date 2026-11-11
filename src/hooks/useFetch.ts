import { useState,useEffect } from "react";


function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    setLoading(true);
    setError(null);
       fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      setData(result);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [url]);
    return { data, loading, error };

}

export default useFetch;