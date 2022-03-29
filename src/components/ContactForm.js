function ContactForm(){
    return (
        <div className="contactForm">
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Subject" className="sub"></input>
                <textarea rows="5" placeholder="Your Message Here"></textarea>
                <button>Let's Do This</button>
            </form>
        </div>
    );
}
export default ContactForm