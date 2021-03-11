import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row">
          <h4>Contact Me!</h4>
          <p className="address">
          <span className="fa fa-envelope"></span>&nbsp;&nbsp;
          <a href = "mailto:raoyuchenom@gmail.com">raoyuchenom@gmail.com</a><br/>
          <span className="fa fa-phone"></span>&nbsp;&nbsp;
          (+65) 8348 7085
          </p><br />
        </div>
      </section >
    );
  }
}

export default Contact;
