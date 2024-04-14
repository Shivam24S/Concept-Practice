import Get from "./Axios/Get";
import Post from "./Axios/Post";

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
    </>
  );
};

export default AxiosContainer;
