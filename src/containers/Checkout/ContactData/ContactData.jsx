import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orederHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Batarin Ilya",
                adress: {
                    street: 'Permskaya 27',
                    zipCode: 61054,
                    country: 'Ukraine'
                },
                email: 'btrn86@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(err => this.setState({ loading: false }));
    }

    render() {
        let form = (
            <form >
                <input className={classes.Input} type="text" name='name' placeholder="your name..." />
                <input className={classes.Input} type="email" name='email' placeholder="your email..." />
                <input className={classes.Input} type="text" name='street' placeholder="your street..." />
                <input className={classes.Input} type="text" name='postal' placeholder="your Postal Code..." />
                <Button
                    btnType='Success'
                    clicked={this.orederHandler}>
                    ORDER
                    </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;