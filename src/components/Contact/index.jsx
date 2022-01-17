import React from 'react'
import {Container} from "./styles"
import Form from "../Form"

import emailIcon from "../../assets/assets/email-icon.svg";
import phoneIcon from "../../assets/assets/phone-icon.svg"

const index = () => {
    return (
        <Container id="contact">
            <header>
                <h1>Contact Me</h1>
                <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
            </header>
            <div className="contacts">
                <div>
                    <img src={emailIcon} alt="Email" />
                    <a href="mailto:rahulparmar1138@gmail.com">rahulparmar1138@gmail.com</a>
                </div>
                <div>
                    <img src={phoneIcon} alt="Phone" />
                    <a href="tel:+917757936611">+91 7757936611</a>
                </div>
            </div>
            <Form/>
        </Container>
    )
}

export default index
