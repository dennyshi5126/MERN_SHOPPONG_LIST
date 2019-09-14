import React, {Component} from 'react';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Water'},
            {id: uuid(), name: 'Sugar'},
            {id: uuid(), name: 'Apple'}
        ]
    }

    render() {
        const {items} = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    className="mb-1"
                    onClick={()=> {
                        const name = prompt("Please enter an item");
                        if(name)
                        this.setState({items: [...items, {id: uuid(), name}]});
                        // this.setState(state => ({
                        //     items: [...state.items, {id: uuid(), name}]
                        // }));
                    }}>
                Enter
            </Button>
            <ListGroup>
                <TransitionGroup>
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} className="faded">
                          <ListGroupItem>
                          <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={() => {
                                this.setState({items:items.filter(item => item.id !== id)});
                            }}>
                            &times;
                          </Button>{name}
                          </ListGroupItem>  
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;