import React,{Fragment} from 'react';
import {Button, Form, FormGroup, Input,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';

const AddMachineModal = () => {

    return(
        <Fragment>
            <ModalHeader>新增機台</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup color="mute">
                        <div className="file-upload-wrapper">
                            <input type="file" id="input-file-now" className="file-upload" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Input type="url" name="ip" placeholder="ip位址，例如：192.168.1.1" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="ip" placeholder="設備名稱，例如：東邊第二台" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={()=> console.log("Upload File")}>上傳圖片</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Form>
                    <FormGroup>
                        <Button color="primary">確定新增</Button>
                    </FormGroup>
                </Form>
            </ModalFooter>
        </Fragment>
    );
}

export default AddMachineModal;