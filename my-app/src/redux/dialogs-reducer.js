const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych', avatar: 'https://inde.io/i/posts/33099/e78d8b0d8f4650e25bee66beb2d19d55.jpg' },
        { id: 2, name: 'Ahdrey', avatar: 'https://cdnimg.rg.ru/i/photogallery/2019/12/06/8085b70e8b6927e/8085b70e8b6927e1575618884.jpg' },
        { id: 3, name: 'Sveta', avatar: 'https://images11.esquire.ru/upload/img_cache/4c5/4c56ea24f5e81571181114e2ba197aed_ce_6000x3743x0x0_cropped_960x600.jpg' },
        { id: 4, name: 'Victor', avatar: 'https://img.gazeta.ru/files3/253/13275253/TASS_32887361-pic4_zoom-1500x1500-66712.jpg' },
        { id: 5, name: 'Valery', avatar: 'https://petstory.ru/resize/800x800x80/upload/images/articles/sobaka-ne-spit-nochyu-chto-delat/sobaka-ne-spit-nochyu-chto-delat-1.jpg' }
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' }
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT: state.newMessageText = action.newText; break;
    }
    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer;