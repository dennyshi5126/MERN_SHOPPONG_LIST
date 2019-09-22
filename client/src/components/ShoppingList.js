import React, { Component } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { get_items, delete_item, add_item } from "../actions/itemActions";
import AddItemModal from "./AddItemModal";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.get_items();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        {/* <Button
          color="dark"
          className="mb-1"
          onClick={() => {
            const name = prompt("Please enter an item");
            if (name) this.props.add_item(uuid(), name);
            // this.setState(state => ({
            //     items: [...state.items, {id: uuid(), name}]
            // }));
          }}
        >
          Enter
        </Button> */}
        <AddItemModal />
        <ListGroup>
          <TransitionGroup>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} className="faded">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.props.delete_item(id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { get_items, delete_item, add_item }
)(ShoppingList);
