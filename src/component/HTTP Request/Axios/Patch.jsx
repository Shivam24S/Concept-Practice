import axios from "axios";
import { useEffect, useState } from "react";

const Patch = () => {
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  const handleClick = () => {
    setFetching(true);
  };

  useEffect(() => {
    async function FetchData() {
      try {
        setIsLoading(true);
        const response = await axios.patch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setIsLoading(false);

        if (response.status === 200) {
          setStatus("success");
        }
        if (!response.ok) {
          throw new Error("failed to update Data");
        }
      } catch (error) {
        setError(error);
      }
    }
    fetching ? FetchData() : null;
  }, [fetching]);

  let content;

  if (isLoading) {
    content = <h5>Updating</h5>;
  }

  if (error) {
    content = <h5>could not Update data</h5>;
  }

  if (status === "success") {
    content = <h5>Data updated successfully</h5>;
  }

  return (
    <>
      <button onClick={handleClick}>Update Data</button>
      {content}
    </>
  );
};
export default Patch;
