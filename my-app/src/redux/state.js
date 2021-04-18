let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, whats up?', likesCount: 12 },
            { id: 2, message: "It's my first post?", likesCount: 27 },
            { id: 3, message: 'Yo', likesCount: 42 }
        ]
    },

    dialogPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Ahdrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Victor' },
            { id: 5, name: 'Valery' }
        ],
    
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' }
        ]
    }    
}

export default state;