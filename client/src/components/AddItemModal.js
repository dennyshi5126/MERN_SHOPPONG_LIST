import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { add_item } from "../actions/itemActions";
import { connect } from "react-redux";

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  inputName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  confirmName = () => {
    if (this.state.name) {
      this.props.add_item({ name: this.state.name });
      this.toggle();
    }
  };
  render() {
    return (
      <div>
        <Button color="dark" className="mb-1" onClick={this.toggle}>
          Enter
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Please enter an item</ModalHeader>
          <ModalBody>
            <input type="text" name="name" onChange={this.inputName}></input>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.confirmName} block>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { add_item }
)(AddItemModal);
