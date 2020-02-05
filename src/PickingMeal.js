import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import './PickingMeal.css'

export default class PickingMeal extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        function onButtonClick(meal){
            handleClose()
            addNewMeal(meal)
          }
        const { show, handleClose, addNewMeal, meals } = this.props;
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>בחר ארוחה</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="buttonContainer">
                        <Button variant="primary" onClick={() => onButtonClick('morning')}>
                            ארוחת בוקר
                        </Button>
                    </div>
                    <div className="buttonContainer">
                        <Button variant="success" onClick={() => onButtonClick("branch")}>
                            בראנץ'
                        </Button>
                    </div>
                    <div className="buttonContainer">
                        <Button variant="warning" onClick={() => onButtonClick("lunch")}>
                            ארוחת צהריים
                        </Button>
                    </div>
                    <div className="buttonContainer">
                        <Button variant="danger" onClick={() => onButtonClick("four")}>
                            ארוחת ארבע
                        </Button>
                    </div>
                    <div className="buttonContainer">
                        <Button variant="info" onClick={() => onButtonClick("evening")}>
                            ארוחת ערב
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        סגירה
                    </Button>
                </Modal.Footer>   
            </Modal>
        )
    }

}

