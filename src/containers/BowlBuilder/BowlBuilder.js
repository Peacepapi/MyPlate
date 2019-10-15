import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Bowl from '../../components/Bowl/Bowl';

class BowlBuilder extends Component {
    state = {
        ingredients: {
            fillings: 0,
            rice: 0,
            beans: 2,
            cheese: 2
        }
    }
    render() {
        return (
            <Aux>
                <Bowl ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BowlBuilder;

