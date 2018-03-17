import React from 'react';

import classes from './Layout.css';

import Aux from '../../hoComps/auxx';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;