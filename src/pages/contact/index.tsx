import "./index.css";

const Contact: React.FC = () => {
    return (
      <main className="contact-page">
      <div className="contact-form">
        <div id="particles-js"></div>
        <h2><b>Contact Us</b></h2>
        <form action="#" method="post">
          <div className="name-inputs">
            <input type="text" id="firstName" placeholder="" required />
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="lastName" placeholder="" required />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" placeholder="" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input type="tel" id="phone" placeholder="" required />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="input-group">
            <textarea id="message" rows={4} placeholder="" required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit">Let's Talk</button>
        </form>
      </div>
    </main>
    );
};

export default Contact;
