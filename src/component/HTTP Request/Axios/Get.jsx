import Axios from "axios";
import { useEffect, useState } from "react";

const Get = () => {
  const [userName, setUserName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function FetchData() {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUserName(response.data);
        setIsLoading(false);

        if (response.status !== 200) {
          throw new Error("failed to Fetch Data");
        }
      } catch (error) {
        setError(error);
      }
    }
    fetching ? FetchData() : null;
  }, [fetching]);

  const handleGetUser = () => {
    setFetching(true);
  };

  let content;

  if (isLoading) {
    content = <h5>Loading....</h5>;
  } else if (error) {
    content = <h5>Failed To Load Data</h5>;
  } else {
    content = userName.map((user) => <li key={user.name}>{user.name}</li>);
  }

  return (
    <>
      <button onClick={handleGetUser}>Get UserName</button>
      <br />
      {content}
    </>
  );
};
export default Get;
