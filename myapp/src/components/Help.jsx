import "../help.css";
import a from "../images/headphones.png";
const Help=()=>{
    return(
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="style.css" />
          <section className="contact">
            <div className="content">
              <h2>24x7</h2>
              <img src={a} alt="headphones" />
              <p>
                If you have any questions or queries a member of staff will always be
                happy to help.Feel free to contact us by telephone or email and we
                will be sure to get back to you as soon as possible.
              </p>
            </div>
            <div className="container">
              <div className="contactInfo">
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>(606) Cumberland, Kentucky(KY), 40823</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>bitcoders@gmail.com</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <h3>phone</h3>
                    <p>+91 6328764268</p>
                  </div>
                </div>
              </div>
              <div className="contactForm">
                <form>
                  <h2>Send Message</h2>
                  <div className="inputBox">
                    <input type="text" name required="required" />
                    <span>Full Name</span>
                  </div>
                  <div className="inputBox">
                    <input type="text" name required="required" />
                    <span>Email</span>
                  </div>
                  <div className="inputBox">
                    <textarea required="required" defaultValue={""} />
                    <span>Type your Query...</span>
                  </div>
                  <div className="inputBox">
                    <input type="submit" name defaultValue="Send" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
    )
        
    
}

export default Help;
