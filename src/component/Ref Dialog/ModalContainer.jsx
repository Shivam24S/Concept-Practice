import { useRef } from "react";
import Modal from "./Modal";

const ModalContainer = () => {
  const dialog = useRef();

  const handleClick = () => {
    dialog.current.showModal();
  };

  return (
    <>
      <h5>Its Dialog Practice using Ref and ForwardRef Practice</h5>
      <br />
      <button onClick={handleClick}>Open</button>
      <Modal refVal={dialog} />
    </>
  );
};

export default ModalContainer;
