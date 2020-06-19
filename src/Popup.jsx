import React from 'react';
import './Popup.css';
class Popup extends React.Component{
constructor(props)
{
    super(props);

    this.state = {
        closePopup:false
    }
}

    render(){return(
        <div className="popup-wrapper">
            <div className="popup-content">
            <h3> Your feedback is sent successfully!</h3>
            <button className="popup-button" onClick={this.props.closePopup}>OK</button>
            </div>
        </div>
    );}

}

export default Popup;