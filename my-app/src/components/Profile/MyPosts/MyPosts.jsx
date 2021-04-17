import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, whats up?', likesCount: 12},
        {id: 2, message: "It's my first post?", likesCount: 27},
        {id: 3, message: 'Yo', likesCount: 42}
    ]

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} />
                <Post message={postData[1].message} />
            </div>
        </div>
    )
}

export default MyPosts;