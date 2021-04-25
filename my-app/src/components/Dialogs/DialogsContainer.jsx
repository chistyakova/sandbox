import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <Dialogs updateNewMessageText={onMessageChange}
            sendMessage={onSendMessage}
            dialogs={state.dialogPage.dialogs}
            messages={state.dialogPage.messages}
            newMessageText={state.dialogPage.newMessageText}
        />
    )
}

export default DialogsContainer;