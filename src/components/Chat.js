import { GiftedChat, InputToolbar, Composer } from 'react-native-gifted-chat'
import React, { useState, useCallback, useEffect } from 'react'
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters';

export default function Chat() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hola holita',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            textInputStyle={{
                borderRadius: moderateScale(20),
                paddingHorizontal: moderateScale(12),
                marginTop: moderateVerticalScale(6),
                marginBottom: moderateVerticalScale(6),
                backgroundColor: 'white',
                borderWidth: 0.5,
                borderColor: 'grey',
            }}

            renderInputToolbar={props => {
                return (
                    <InputToolbar
                        containerStyle={{ 
                            backgroundColor: '#f6f6f6',
                        }}
                        {...props}
                        
                    />
                )
            }}
                
        />
    );
}