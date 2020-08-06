import React from 'react';
import '../../styles.css';
import FadeIn from 'react-fade-in';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedName: false,
            focusedEmail: false,
            focusedMessage: false,
            name: '',
            email: '',
            message: ''
        };
        //these binds to the class allows me to use component methods such as setState() within the made method.
        this.nameNotInFocus = this.nameNotInFocus.bind(this);
        this.nameInFocus = this.nameInFocus.bind(this);
        this.emailNotInFocus = this.emailNotInFocus.bind(this);
        this.emailInFocus = this.emailInFocus.bind(this);
        this.messageNotInFocus = this.messageNotInFocus.bind(this);
        this.messageInFocus = this.messageInFocus.bind(this); 
    }

    nameNotInFocus() {
        this.setState({
            focusedName: false
        });
    }

    nameInFocus() {
        this.setState({
            focusedName: true
        });
    }

    emailNotInFocus() {
        this.setState({
            focusedEmail: false
        });
    }

    emailInFocus() {
        this.setState({
            focusedEmail: true
        });
    }

    messageNotInFocus() {
        this.setState({
            focusedMessage: false
        });
    }

    messageInFocus() {
        this.setState({
            focusedMessage: true
        });
    }

    submitEmail() {
        this.setState({
            focusedName: false,
            focusedEmail: false,
            focusedMessage: false,
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return(
            <div className="body">
                <FadeIn>
                    <h1>Contact</h1>
                    <p><em>If there are any problems with the website or design flaws, please contact me by filling out the contact information below.</em></p>
                    <div className={this.state.focusedName? "focused-box" : "not-focused-box"}>
                        <input className="box-input" 
                            type="text" 
                            placeholder="Name"
                            onFocus={this.nameInFocus}
                            onBlur={this.nameNotInFocus}
                        />
                    </div>
                    <div className={this.state.focusedEmail? "focused-box" : "not-focused-box"}>
                        <input className="box-input" 
                            type="text"
                            placeholder="Email"
                            onFocus={this.emailInFocus}
                            onBlur={this.emailNotInFocus}
                        />
                    </div>
                    <div className={this.state.focusedMessage? "focused-box" : "not-focused-box"}>
                        <textarea className="message-box-input"
                            placeholder="Message"
                            onFocus={this.messageInFocus}
                            onBlur={this.messageNotInFocus}
                        />
                    </div>
                    <button onClick={this.submitEmail}>Submit</button>
                </FadeIn>
            </div>
        );
    }
}

export default Contact;