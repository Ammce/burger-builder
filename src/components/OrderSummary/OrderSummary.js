import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return <li key={ingKey}> <span style={{ textTransform: 'capitalize' }}>{ingKey}</span> : {this.props.ingredients[ingKey]} </li>
            })
        return (
            <Aux>
                <p>Your order with following ingrediants is ready to be submited. Here is the list of ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price is: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType={'Danger'} clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;