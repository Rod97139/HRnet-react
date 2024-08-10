import { useEffect, useState } from 'react';
import Modal from 'react-modal';



const ReactModal = ({shouldOpenModal, setShouldOpenModal}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    Modal.setAppElement('#root');

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
        setShouldOpenModal(false)
    }

    useEffect(() => {
        if(shouldOpenModal){
            openModal()
        }

    }, [shouldOpenModal])

  return (
    <div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div>Employé bien ajouté</div>
          <button onClick={closeModal}>close</button>
        </Modal>
    </div>
  )
}

export default ReactModal
