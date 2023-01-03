import React from 'react'

const Modal = ({ clearList, setShowModal }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Warning</h2>
        <p>are you sure you want to remove all the items?</p>
        <div className='modal-footer'>
          <button className='y-btn' onClick={clearList}>Yes</button>
          <button className='n-btn' onClick={() => setShowModal(false)}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal