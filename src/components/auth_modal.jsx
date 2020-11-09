import React from 'react';
import './auth_modal.css';
import {useState} from 'react';
import Modal from 'react-modal';

class AuthModal extends React.component{
    render(){

      const [modalIsOpen,setModalIsOpen] = useState(false)

        return(
            <div className="MainDivAuth">
                 <div>
        {/* Button trigger modal */}
        <button type="button"  onClick={()=>setModalIsOpen(true)}   className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>
        {/* Modal */}
        <Modal isOpen={modalIsOpen} >
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{set}} >Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </Modal>
      </div>
            </div>
        )
    }
}

export default AuthModal;