import { ModalBox, ModalContainer } from "./style";
import { FiX } from "react-icons/fi";

function Modal({ handleSubmit, children, funcao, setActivemodal, modalName }) {
  return (
    <ModalContainer>
      <ModalBox>
        <div>
          <p>{modalName}</p>
          <button type="button" onClick={() => setActivemodal(false)}>
            <FiX />
          </button>
        </div>
        <form onSubmit={handleSubmit(funcao)}>{children}</form>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
