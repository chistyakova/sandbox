import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.jpg'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
    <div>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div className={style.descriptionBlock}>
            <div>
            <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} />
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
        </div>
    </div>
    )
}

export default ProfileInfo;