import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    let posts = [
        { id: 1, message: 'Hi, whats up?', likesCount: 12 },
        { id: 2, message: "It's my first post?", likesCount: 27 },
        { id: 3, message: 'Yo', likesCount: 42 }
    ]

    return <div>
        <ProfileInfo />
        <MyPosts posts = {posts} />
    </div>
}

export default Profile;