import Get from "./FetchAPI/Get";
import Post from "./FetchAPI/Post";

const HTTP = () => {
  return (
    <>
      {/* using fetch API */}

      {/* getting userName using Fetch API */}
      <h3>Getting UserName</h3>
      <Get />
      <br />
      <br />
      {/* Posting using Fetch  */}
      <h3>Posting Data</h3>
      <Post />
    </>
  );
};
export default HTTP;
