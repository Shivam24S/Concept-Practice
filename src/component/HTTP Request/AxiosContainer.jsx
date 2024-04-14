import Delete from "./Axios/Delete";
import Get from "./Axios/Get";
import Patch from "./Axios/Patch";
import Post from "./Axios/Post";
import Put from "./Axios/Put";

const AxiosContainer = () => {
  return (
    <>
      <h2>HTTP request using Axios</h2>

      {/* getting User Name */}
      <h3>Get userName</h3>
      <Get />

      {/* posting  Data */}
      <h3>Post Data</h3>
      <Post />

      <h3>Delete Data</h3>
      <Delete />

      <h3>update Data using Patch</h3>
      <Patch />

      <h4>Update Data using Put</h4>
      <Put />
    </>
  );
};

export default AxiosContainer;
