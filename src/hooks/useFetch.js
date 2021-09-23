// Npm packages
import { useState, useEffect } from "react";

export default function useFetch(url, backupData) {
  const [status, setStatus] = useState(0); // 0 - loading, 1 - loaded, 2 - error
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  //Methods
  function fetchData() {
    const sessionStorageItems = sessionStorage.getItem("packages");
    if (sessionStorageItems) {
      setData(JSON.parse(sessionStorageItems));
      setStatus(1);
    } else {
      fetch(url)
        .then(handleResponseErrors)
        .then((json) => onSuccess(json))
        .catch((error) => onFail(error));
    }
  }

  function handleResponseErrors(response) {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  }

  function onSuccess(json) {
    sessionStorage.setItem("packages", JSON.stringify(json));
    setData(json);
    setStatus(1);
  }

  function onFail(error) {
    console.error(
      `The data loading is failed: ${error}. The backup data is used`
    );
    setStatus(2);
    setData(backupData);
  }

  return { status, data };
}
