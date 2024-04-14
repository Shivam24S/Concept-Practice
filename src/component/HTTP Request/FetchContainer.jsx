import Delete from "./FetchAPI/Delete";
import Get from "./FetchAPI/Get";
import Patch from "./FetchAPI/Patch";
import Post from "./FetchAPI/Post";
import Put from "./FetchAPI/Put";

const FetchContainer = () => {
  return (
    <>
      {/* using fetch API */}

      <h2>HTTP Request using fetch API</h2>
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

      {/* update Particular part using Patch */}
      <h3>Patch Data</h3>
      <Patch />

      {/* update whole part using Put */}
      <h3>Put Data</h3>
      <Put />
    </>
  );
};
export default FetchContainer;
