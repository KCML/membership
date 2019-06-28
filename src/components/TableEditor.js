import React, {Fragment} from 'react';
import {Button, Input} from 'reactstrap';
// import axios from 'axios';

const TableEditor = () => {
    return(
        <Fragment className="d-inline">
                <Input className="round-input-md input-width-sm" type="text" name="search"  placeholder="搜尋機台......"/>
                <Button className="round-button-md" color="primary"><i className="far fa-edit"></i>編輯</Button>
                <Button className="round-button-md" color="danger"><i className="fas fa-times"></i>刪除</Button>
        </Fragment>
    );
}

export default TableEditor;