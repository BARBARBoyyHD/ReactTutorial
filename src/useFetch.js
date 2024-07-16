import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abourtCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abourtCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could Not Fetch The data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
            if(err.name = "AbortError"){
                console.log('Fetch Aborted');
            }else{
                setIsPending(false)
                setError(err.message)
            }
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    return () => {
      console.log("cleanup");
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;