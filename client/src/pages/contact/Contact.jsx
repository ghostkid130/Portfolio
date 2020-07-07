import React from 'react'
import './contact.css'
import '../cssTemplate.css'
import Nav from '../../components/Nav'

const Contact = () => {
    const [ contact, setContact ] = React.useState({
        name: '', email: '', phone: '', message: ''
    })

    const submitForm = (e) => {
        console.log("hello")
    }


    return (
        <div className="container contact">
            <div />
            <div style={{alignSelf:"center"}}>
            <h1 className="title">Contact</h1>
            <form 
                action="https://formspree.io/moqkkejy" 
                method="POST"
                onSubmit={submitForm}
                className="contact-form"
            > 
                <input 
                    className="contact-input"
                    placeholder="Name"
                    type="text"
                    onChange={(() => setContact({...contact, name: ''}))}
                />
                <input 
                    className="contact-input"
                    placeholder="Phone Number"
                    type="text"
                    onChange={(() => setContact({...contact, phone: ''}))}
                />
                <input
                    className="contact-input"
                    placeholder="Enter email"
                    type="text"
                    onChange={(() => setContact({...contact, email: ''}))}
                />
                <textarea
                    className="contact-input"
                    placeholder="Your message"
                    type="text"
                    onChange={(() => setContact({...contact, message: ''}))}
                ></textarea>
                <button onClick={(e) => submitForm()}>
                    Send Message
                </button>
            </form>
        </div>
        <Nav />
        </div>
    )
}

export default Contact
