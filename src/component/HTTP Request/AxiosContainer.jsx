import Get from "./Axios/Get";

const AxiosContainer = () => {
  return (
    <>
      <h2>HTTP request using Axios</h2>

      {/* getting User Name */}
      <h3>Get userName</h3>
      <Get />
    </>
  );
};

export default AxiosContainer;
