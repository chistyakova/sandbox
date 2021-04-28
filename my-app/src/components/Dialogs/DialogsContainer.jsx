import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs'

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let onSendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));

                }
                return <Dialogs updateNewMessageText={onMessageChange}
                    sendMessage={onSendMessage}
                    dialogs={state.dialogPage.dialogs}
                    messages={state.dialogPage.messages}
                    newMessageText={state.dialogPage.newMessageText} />
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;