import React from 'react';
import {Form, FormGroup, FormInput, Input, Modal,ModalBody,ModalFooter, ModalHeader} from 'reactstrap';
import AddMachineModal from './AddMachineModal';
import EditMachineModal from './EditMachineModal';
import ShowStatusModal from './ShowStatusModal';

const BaseModal = ({modalType}) => {

    if(modalType === "add") {
        return(
            <Modal isOpen={true} centered>
                <AddMachineModal />
            </Modal>
        );
    }
    else if (modalType === "edit") {
        return(
            <Modal isOpen={true} centered>
                <EditMachineModal />
            </Modal>
        );
    }
    else if (modalType === "show") {
        return(
            <Modal isOpen={true} centered>
                <ShowStatusModal />
            </Modal>
        );
    }
    else {
        return null;
    }
    
}

export default BaseModal;