import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class PickingMeal extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { show, handleClose } = this.props;
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>בחר ארוחה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" onClick={handleClose}>
                        ארוחת בוקר
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        בראנץ'
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        ארוחת צהריים
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        ארוחת ארבע
                    </Button>
                    <Button variant="info" onClick={handleClose}>
                        ארוחת ערב
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
               
                
            </Modal>
        )
    }

}

