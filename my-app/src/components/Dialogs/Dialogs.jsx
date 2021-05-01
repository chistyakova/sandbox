import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    debugger;

    let dialogsElements = props.dialogPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);

    let messagesElements = props.dialogPage.messages
        .map(m => <Message message={m.message} />);

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='Enter your message'
                        onChange={onMessageChange}
                        value={props.dialogPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onSendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;