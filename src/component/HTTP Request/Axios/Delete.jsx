import axios from "axios";
import { useEffect, useState } from "react";

const Delete = () => {
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sendingData, setSendingData] = useState(false);

  const handleClick = () => {
    setSendingData(true);
  };

  useEffect(() => {
    async function FetchData() {
      try {
        setIsLoading(true);
        const response = await axios.delete(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setIsLoading(false);

        if (response.status === 200) {
          setStatus("success");
        }
        if (!response.ok) {
          throw new Error("failed to Delete Data");
        }
      } catch (error) {
        setError(error);
      }
    }
    sendingData ? FetchData() : null;
  }, [sendingData]);

  let content;

  if (isLoading) {
    content = <h5>Deleting</h5>;
  }

  if (error) {
    content = <h5>could not Deleted data</h5>;
  }

  if (status === "success") {
    content = <h5>Data Deleted successfully</h5>;
  }

  return (
    <>
      <button onClick={handleClick}>Delete Data</button>
      {content}
    </>
  );
};
export default Delete;
