import React, {Component} from 'react';

import Aux from '../../hoComps/auxx';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>BuildControl</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;