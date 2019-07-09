import React from 'react';
import {Container} from 'reactstrap';
// import MachineTable from '../components/MachineTable';
import Dashboard from '../components/Dashboard';
// import AddMachineModal from '../components/AddMachineModal';
const DashboardPage = () => {
    return(
        <Container fluid>
            <Dashboard/>
        </Container>
    );
}

export default DashboardPage;