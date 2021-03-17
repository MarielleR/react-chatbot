import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class SimpleForm extends Component {
    render() {
        return (
            <ChatBot 
                steps={[
                    {
                        id: 'intro',
                        message: 'Hey there, I am a chatbot! Do you agree to the Terms and Conditions?',
                        trigger: 'user-answer-1',
                    },
                    {
                        id: 'user-answer-1',
                        options: [
                            {value: 'y', label: 'Yes', trigger: 'yes-response'},
                            {value: 'n', label: 'No', trigger: 'no-response'},
                        ]
                    },
                    {
                        id: 'yes-response',
                        message: 'Great!',
                        trigger: 'name-capture',
                    },
                    {
                        id: 'no-response',
                        message: 'Oh no! We will send you an email with more details',
                        trigger: 'email-capture',
                    },
                    {
                        id: 'name-capture',
                        message: 'What is your name?',
                        trigger: 'name-validation',
                    },
                    {
                        id: 'name-validation',
                        user: true,
                        validator: (value) => {
                            if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
                                return true;
                            }
                            else {
                                return 'Please input alphabet characters only.';
                            }
                        },
                        end: true,
                    },
                    {
                        id: 'email-capture',
                        message: 'What is your email?',
                        trigger: 'email-validation',
                    },
                    {
                        id: 'email-validation',
                        user: true,
                        validator: (value) => {
                            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                                return true;
                            }
                            else {
                                return 'Please enter a valid email.';
                            }
                        },
                        end: true,
                    },
                ]}            
            />
        );
    }
}

export default SimpleForm;