import React, { Component } from 'react';

import classes from './Layout.css';

import Aux from '../../hoComps/auxx';

import Toolbar from '../Navigation/Toolbar/Toolbar';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import { connect } from 'react-redux'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
    }
    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                    isAuth={this.props.isAuthenticated}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token !== null
})

export default connect(mapStateToProps)(Layout);