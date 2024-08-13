import Modal from 'react-modal';
const ReactModal = ({shouldOpenModal, setShouldOpenModal}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '300px',
          height: '70px',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',

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
          <div className='modal-texte'>Employee added successfully</div>
          <button className='hr-btn' onClick={closeModal}>close</button>
        </Modal>
    </div>
  )
}

export default ReactModal
