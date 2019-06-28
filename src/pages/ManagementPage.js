import React from 'react';
// import {Col, Container,Row} from 'reactstrap';
import MachineTable from '../components/MachineTable';
// import AddMachineModal from '../components/AddMachineModal';
const ManagementPage = () => {
    return(
        <div>
            <MachineTable />
            {/* <AddNewMachineModal /> */}
        </div>
    );
}

export default ManagementPage;