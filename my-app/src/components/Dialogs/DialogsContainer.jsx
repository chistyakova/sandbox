import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;