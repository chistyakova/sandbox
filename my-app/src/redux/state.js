const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, whats up?', likesCount: 12 },
                { id: 2, message: "It's my first post?", likesCount: 27 },
                { id: 3, message: 'Yo', likesCount: 42 }
            ],
            newPostText: 'wow wow'
        },

        dialogPage: {
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
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


window.store = store;

export default store;