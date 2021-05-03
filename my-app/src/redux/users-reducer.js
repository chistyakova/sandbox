const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://inde.io/i/posts/33099/e78d8b0d8f4650e25bee66beb2d19d55.jpg', 
            followed: false, fullName: 'Dimych', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        { id: 2, photoUrl: 'https://img.gazeta.ru/files3/253/13275253/TASS_32887361-pic4_zoom-1500x1500-66712.jpg', 
            followed: true, fullName: 'Sasha', status: 'I like rombabas', location: {city: 'Narva', country: 'Estonia'} },
        { id: 3, photoUrl: 'https://images11.esquire.ru/upload/img_cache/4c5/4c56ea24f5e81571181114e2ba197aed_ce_6000x3743x0x0_cropped_960x600.jpg', 
            followed: true, fullName: 'Sveta', status: 'I am looking for a job', location: {city: 'Maloayroslavets', country: 'Russia'} }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                }) 
            }
        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                }) 
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default: 
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;