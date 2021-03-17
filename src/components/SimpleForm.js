import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class SimpleForm extends Component {
    render() {
        return (
            <ChatBot 
                steps={[
                    {
                        id: 'intro',
                        message: 'Hey there, I am a chatbot!',
                        end: true,
                    },
                ]}
            
            />
        );
    }
}

export default SimpleForm;