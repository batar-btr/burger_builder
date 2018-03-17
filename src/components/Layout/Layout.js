import React from 'react';

import Aux from '../../hoComps/test';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;