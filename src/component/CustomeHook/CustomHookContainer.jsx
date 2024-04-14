import useFetch from "../../../hook/useFetch";

const CustomHookContainer = () => {
  let url = "https://jsonplaceholder.typicode.com/users";

  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Sorry could not fetch Data</h3>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CustomHookContainer;
