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


    const closeModal = () => {
        setShouldOpenModal(false)
    }

  return (
    <div>
        <Modal
        isOpen={shouldOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
          <div>Employee correctly added</div>
          <button onClick={closeModal}>close</button>
        </Modal>
    </div>
  )
}

export default ReactModal
