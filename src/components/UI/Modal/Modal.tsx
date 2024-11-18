import React from 'react';
import BackDrop from '../BackDrop/BackDrop';

interface Props extends React.PropsWithChildren {
  show: boolean;
  closeModal: () => void;
  name: string;
}

const Modal: React.FC<Props> = ({name, show, closeModal}) => {

  return (
    <>
      <BackDrop show={show} onClick={closeModal}/>
      <div className="modal show" style={{ display: show ? 'block' : 'none', width: '500px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="p-2">
              {name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;