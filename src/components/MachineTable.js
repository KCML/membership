import React from 'react';
// import {Button, Col,CustomInput, Form, FormGroup, Input, Label,Row, Modal, Table} from 'reactstrap';
import DataTable from 'react-data-table-component';

import useData from '../hooks/useData';
// import demo from '../misc/DemoData.json';
// import BaseModal from './BaseModal';
import TableEditor from './TableEditor';

const MachineTable = () => {
    // const [modal,setModal] = useState("");
    // console.log(demo.CNCmachine);
    // const machines = demo.CNCmachine;
    const theData = useData("");
    console.log(theData);
    const columns = [
        
        {
            name:"機台圖片",
            selector: "image",
            sortable: false,
            cell: row => <img className="image-size-100px" alt={row.name} src={row.image} />
        },
        {
            name:"機台名稱",
            selector:"name",
            sortable: true,
        },
        {
            name:"機台IP位址",
            selector: "ip",
            sortable: true
        },
        {
            name:"機台ID",
            selector: "uuid",
            sortable: false
        },
        {
            name:"選項",
            button: true,
            cell:() => (
                // <Fragment>
                //     <Button color="primary">
                //         編輯
                //     </Button>
                //     {" "}
                //     <Button color="danger">
                //         刪除
                //     </Button>
                // </Fragment>
                <i className="fas fa-ellipsis-v pointer" onClick={()=>{console.log("more action is clicked")}}></i>
            ),
            ignoreRowClick: true,
            allowOverflow: true
        }
    ];


    return(
        <DataTable title="機台列表" columns={columns} data={theData} fixedHeader fixedHeaderScrollHeight="60vh" selectableRows={false} subHeader subHeaderComponent={<TableEditor />}/>
    );
}

export default MachineTable;