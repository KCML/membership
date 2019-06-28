import React, {useState, useEffect, Fragment} from 'react';
import AddMachineModal from '../components/AddMachineModal';
import EditMachineModal from '../components/EditMachineModal';
const useModal = (modalType) => {
    const [modal,setModal] = useState({});

    useEffect(
        ()=>{
            if(modalType === "add") {
                setModal(<AddMachineModal />);
            }
            else if (modalType == "edit") {
                setModal(<EditMachineModal />);
            }
    },[modalType]);
    return modal;
}

export default useModal;