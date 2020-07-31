import React from 'react'
import './contact.css'

const Contact = () => {
    const [message, setMessage ] = React.useState({ 
        name: "", number: "", email: "", message: ""
    })
    const formRef = React.useRef(null)

    function formSubmit(e){
        console.log("Form Submit")
        e.preventDefault();
        const form = formRef.current;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {
            console.warn("form error")
            }
        }
        xhr.send(data);
    }


    return (
        <div id="contact">
            <h1 
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                Contact Rey!
            </h1>
            <form 
                action="https://formspree.io/mjvalgdq"
                method="POST"
                id="contact-form" 
                ref={formRef}
                onSubmit={e => formSubmit(e)}
            >
                <p data-aos="fade-left">Your name:</p>
                <input 
                    data-aos="fade-right"
                    data-aos-duration="40000"
                    data-aos-delay="100"
                    type="text" 
                    name="name" 
                    onChange={(e) => setMessage({ ...message, name: e.target.value })}     
                />
                {/* ---------------- */}
                <p data-aos="fade-left">Phone Number:</p>
                <input 
                    name="number" 
                    type="number" 
                    data-aos="fade-right" 
                    data-aos-duration="40000"
                    data-aos-delay="200"
                    onChange={(e) => setMessage({ ...message, number: e.target.value })}     
                />
                {/* ---------------- */}
                <p data-aos="fade-left">Email:</p>
                <input 
                    name="email"  
                    type="text" 
                    data-aos="fade-right"  
                    data-aos-duration="40000"
                    data-aos-delay="300"
                    onChange={(e) => setMessage({ ...message, email: e.target.value })}       
                />
                {/* ---------------- */}

                <p data-aos="fade-left">Message:</p>
                <textarea 
                    name="message" 
                    type="text" 
                    rows="4"
                    id="contact-textarea"
                    data-aos="fade-right"  
                    data-aos-duration="40000"
                    data-aos-delay="400"
                    onChange={(e) => setMessage({ ...message, message: e.target.value })}     
                />
                <button
                    onClick={e => formSubmit(e)}
                    data-aos="fade-up"
                    data-aos-duration="40000"
                    data-aos-delay="500"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Contact
