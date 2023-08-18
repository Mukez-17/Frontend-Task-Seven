import React from "react";

const ContactUs = () => {
    return(
        <div className="contactus">
            <section id="form">
            <h2>CONTACT US</h2>
            <form>
                <div className="row form-input">
                    <input type="text" name="name" id="name" placeholder="Enter your Name" />
                </div>
                <div className="row form-input">
                    <input type="text" name="email" id="email" placeholder="Enter Email" />
                </div>
                <div className="row form-input">
                    <input type="number" name="number" id="number" placeholder="Enter Your number" />
                </div>
                <div className="row form-input">
                    <input type="text" name="address" id="addres" placeholder="Enter your address"/>
                </div>
                <div className="row form-button">
                    <button type="submit" class="btn btn-outline-success form-button">Submit</button>
                </div>
            </form>
            </section>
        </div>
    );
}

export default ContactUs;