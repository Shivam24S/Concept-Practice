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
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const responseData = await response.json();
        setUserName(responseData);
        setIsLoading(false);

        if (!response.ok) {
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

  return (
    <>
      <button onClick={handleGetUser}>Get UserName</button>
      {isLoading && <h5>Loading....</h5>}

      {error && <h6>Failed To Load Data</h6>}

      {userName.length > 0 &&
        userName.map((user) => <li key={user.name}>{user.name}</li>)}
    </>
  );
};
export default Get;
