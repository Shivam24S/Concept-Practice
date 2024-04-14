import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
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
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts" //body
        );
        setIsLoading(false);

        if (response.status === 201) {
          setStatus("success");
        }
        if (!response.status !== 200) {
          throw new Error("failed to Post Data");
        }
      } catch (error) {
        setError(error);
      }
    }
    sendingData ? FetchData() : null;
  }, [sendingData]);

  let content;

  if (isLoading) {
    content = <h5>Sending</h5>;
  }

  if (error) {
    content = <h5>could not Post data</h5>;
  }

  if (status === "success") {
    content = <h5>Data sent successfully</h5>;
  }

  return (
    <>
      <button onClick={handleClick}>Send Data</button>
      {content}
    </>
  );
};
export default Post;
