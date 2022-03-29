import ContactForm from "./ContactForm";

function Contact(){

    return(
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1>Let's Build Something Togethor!</h1>
                    <div className="info">
                    
                    </div>
                </div>
                <div className="contact-right">
                    <p className="desc">
                        <b>Available for freelance work whenever the right project comes along.</b> <br/>
                        Fill in the details below, and I'll be in touch soon. Easy peasy.
                    </p>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contact