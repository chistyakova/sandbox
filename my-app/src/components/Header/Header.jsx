import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return <div className={style.header}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU' />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    </div>
}

export default Header;