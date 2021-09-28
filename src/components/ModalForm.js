import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



class ModalForm extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event)=>this.props.update(event)}>
                            <Form.Group className="mb-3" >
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" name='name' defaultValue={this.props.name} />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" name='image' defaultValue={this.props.image} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <Form.Label>price</Form.Label>
                                <Form.Control type="text"  name='price' defaultValue={this.props.price} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={this.props.close}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }


}

export default ModalForm;