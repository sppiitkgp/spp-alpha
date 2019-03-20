import React, { Component } from 'react'

class GetInTouch extends Component {
  render() {
    return (
      <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in touch</h2>
        <div className="split style1">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><div className="button submit">Send Message</div></li>
              </ul>
            </form>
          </section>
          <section>
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>
                  Materials Science Center,<br/>
                  Indian Institute of Technology, <br/>
                  India 721302
                </span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="mailto:shibayan@matsc.iitkgp.ernet.in">shibayan@matsc.iitkgp.ernet.in</a>
              </li>
              <li>
                <h3>Phone</h3>
                <span>+91 3222 283962</span>
              </li>
              <li>
                <h3>Social</h3>
                <ul className="icons">
                  <li><a className="fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a className="fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a className="fa-github"><span className="label">GitHub</span></a></li>
                  <li><a className="fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
    )
  }
}
export default GetInTouch