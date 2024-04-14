const Modal = ({ refVal }) => {
  return (
    <>
      <dialog ref={refVal}>
        hi there 🙋🏻‍♂️
        <br />
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
