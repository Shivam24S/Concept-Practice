import { forwardRef } from "react";

const Modal = forwardRef((props, ref) => {
  return (
    <>
      <dialog ref={ref}>
        hi there 🙋🏻‍♂️
        <br />
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default Modal;
