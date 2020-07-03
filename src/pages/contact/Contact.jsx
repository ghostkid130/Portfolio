import React from 'react'
import './contact.css'

const Contact = () => {
    const [ contact, setContact ] = React.useState({
        name: '', email: '', phone: '', message: ''
    })
    return (
        <div className="contact">
            <h1>Contact</h1>
            <form className="contact-form"> 
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
                <button>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
