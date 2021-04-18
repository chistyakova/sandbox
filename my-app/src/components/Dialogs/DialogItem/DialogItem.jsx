import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogsItem}>
            <div>
                <img src={props.avatar} />
            </div>
            <div className={style.dialogName}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem;