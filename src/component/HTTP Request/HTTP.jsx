import Delete from "./FetchAPI/Delete";
import Get from "./FetchAPI/Get";
import Post from "./FetchAPI/Post";

const HTTP = () => {
  return (
    <>
      {/* using fetch API */}

      {/* getting userName using Fetch API */}
      <h3>Get UserName</h3>
      <Get />
      <br />
      <br />
      {/* Posting using Fetch  */}
      <h3>Post Data</h3>
      <Post />

      {/* Deleting Data using Fetch */}
      <h3>Delete Data</h3>
      <Delete />
    </>
  );
};
export default HTTP;
