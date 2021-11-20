const ContactSection = () => {
    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            

            <form className="contact-form">
                <div className="first-row">
                    <div className="label-input">
                        <label htmlFor="firstName">First name</label>
                        <input id="firstName"></input>
                    </div>

                    <div className="label-input">
                        <label htmlFor="lastName">Last name</label>
                        <input id="lastName"></input>
                    </div>
                </div>

                <div className="label-input">
                    <label htmlFor="email">Email</label>
                    <input id="email"></input>
                </div>

                <div className="label-input">
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                </div>

                <div className="button">Submit</div>
            </form>
        </div>
    )
}

export default ContactSection
