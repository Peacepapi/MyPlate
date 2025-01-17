import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.showModal} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1':'0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux> 
        )
    }
    
}

export default modal;