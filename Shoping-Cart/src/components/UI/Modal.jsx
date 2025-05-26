import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-40"
    onClick={onClose}
  />
);

const ModalOverlay = ({ children }) => (
  <div className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
    {children}
  </div>
);

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('modal-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
