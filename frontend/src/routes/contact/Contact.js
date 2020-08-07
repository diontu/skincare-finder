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
        this.submitEmail = this.submitEmail.bind(this);
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

        //send the info and etc. to the backend with an axios call

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
                            value={this.state.name}
                            onFocus={this.nameInFocus}
                            onBlur={this.nameNotInFocus}
                            onChange={event => this.setState({name: event.target.value})}
                        />
                    </div>
                    <div className={this.state.focusedEmail? "focused-box" : "not-focused-box"}>
                        <input className="box-input" 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onFocus={this.emailInFocus}
                            onBlur={this.emailNotInFocus}
                            onChange={event => this.setState({email: event.target.value})}
                        />
                    </div>
                    <div className={this.state.focusedMessage? "focused-box" : "not-focused-box"}>
                        <textarea className="message-box-input"
                            placeholder="Message"
                            value={this.state.message}
                            onFocus={this.messageInFocus}
                            onBlur={this.messageNotInFocus}
                            onChange={event => this.setState({message: event.target.value})}
                        />
                    </div>
                    <button onClick={this.submitEmail}>Submit</button>
                </FadeIn>
            </div>
        );
    }
}

export default Contact;