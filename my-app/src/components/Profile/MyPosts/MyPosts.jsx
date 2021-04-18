import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    // let posts = [
    //     { id: 1, message: 'Hi, whats up?', likesCount: 12 },
    //     { id: 2, message: "It's my first post?", likesCount: 27 },
    //     { id: 3, message: 'Yo', likesCount: 42 }
    // ]

    let postsElements = props.posts
        .map(p => <Post message={p.message} />);

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
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;