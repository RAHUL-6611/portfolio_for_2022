import React from 'react'
import { Container, ContainerSuccess } from "./styles"
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'


const index = () => {
    const [state, handleSubmit]= useForm("xknyorlg");
    const [isvalidEmail, setIsValildEmail] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const [message, setMessage] = useState("");

    function verifyEmail(email) {
        if (validator.isEmail(email)) {
            setIsValildEmail(true)
        }
        else{
            setIsValildEmail(false)            
        }
    }

    useEffect(()=>{
        if (state.succeeded){
            toast.success("Email Sent Succesfully",{
                position: toast.POSITION.BOTTOM_LEFT,
                pauseOnFocusLoss: false,
                closeOnClick: true,
                hideProgressBar: false,
                toastId: 'succeeded',
            })
        }
    },[state])

    if (state.succeeded){
        return (
                <ContainerSuccess>
                    <h3>Thank you for Contacting!</h3>
                    <button
                    onClick={()=>{
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }}>
                        BACK TO TOP
                    </button>
                    <ToastContainer />
                </ContainerSuccess>

        )
    }
    return (
        <Container>
            <h1>Get in touch using the form below</h1>
            <form onSubmit={handleSubmit}>
                <input
                 type="email"
                 id="email"
                 name="email"
                 onChange={(e)=>verifyEmail(e.target.value)}
                 placeholder="Email"
                 required
                 />
                 <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <textarea
                    required 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                    onChange={(e)=>setMessage(e.target.value)}
                    placeholder="Leave your message here"
                    />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                /> 
                <ReCAPTCHA
                    sitekey="6LeiryMeAAAAAJsU19pY-7lN_UT7zIBaBCPlquV1"
                    onChange={(e)=>setIsHuman(true)}>
                </ReCAPTCHA>
                <button
                    type="submit"
                    disabled={state.submitting || !isvalidEmail || !message}
                    >
                    Submit
                </button>
            </form>
            <ToastContainer />
        </Container>
    )
}

export default index
