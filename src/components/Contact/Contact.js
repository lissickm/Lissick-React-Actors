//Every component needs this import
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        //return is what will be drawn on the dom
        return (
            <div>
            <h2>Contact</h2>
            <p>555-555-5555</p>
            <p>contact@gmail.com</p>
            </div>
        )
    }
}

export default Contact;