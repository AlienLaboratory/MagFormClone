import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import Popup from './Popup'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      popup:false
    };

    //this.handleInputChange = this.handleInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(event)
  {
      event.preventDefault();
      const templateParams ={
          user_name : this.state.name,
          user_email : this.state.email,
          message : this.message
      }

      emailjs.send("gmail","mag_template",templateParams,"user_n551VInBmXqzX381vhqG5").then( (response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.togglePopup();
     }, function(error) {
        console.log('FAILED...', error);
     });
  }

 togglePopup()
 {
     this.setState({popup:!this.state.popup});
 }

  handleInputChange(event)
  {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
     this.setState({ [name]: value });
  }


 


  render() { return(
    <div className="App">
      <div className="page-wrapper">
        <div className="page-container">
      <header className="App-header"></header>
        <div className="form-header">
        <h1 className="form-title">Get in touch</h1>
         <div className="form-subtitle"> 
         Let us know 
         <br/>
         how we can help
         </div>
        </div>
        <div className="form-body-wrapper">
            <div className="form-wrapper">
                <form id="mag-form" className="form" method="post" action="/" name="contact">
                  <input type="hidden" name="contact_number" value="getintouch" />
                  <input type="hidden" name="bot-field"/>
                  <input className="form-input" name="name" type="text" placeholder="Name" required onChange={this.handleInputChange.bind(this)}/>
                  <input className="form-input" name="email" type="email" placeholder="E-mail" required onChange={this.handleInputChange.bind(this)} />
                  <textarea className="form-input" name="message" placeholder="Message" onChange={this.handleInputChange.bind(this)}></textarea>
                  <button className="form-submit" type="submit" onClick={this.sendEmail}>Send</button>
                </form>
            </div>
            <div className="next-wrapper">
                    <h3 className="next-title"> What's next </h3> 
                    <p>We’ll contact you within a few hours with our next steps. 
                      We normally schedule a call with our engineers to discuss your project in more detail. 
                      If you’d like to sign an NDA, please let us know. We’ll prepare it for you.
                      </p>
                      <p>
                      Since we live on two different continents (Australia and Europe) we are available around the clock.
                      </p>
            </div>
         </div>
         {this.state.popup?<Popup closePopup={this.togglePopup.bind(this)} /> : null}
         </div>
      </div>
    </div>
  );
  }
}

export default App;
