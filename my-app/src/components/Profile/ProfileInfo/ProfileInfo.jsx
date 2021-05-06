import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
    <div>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU' />
        </div>
        <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava+descr9999
        </div>
    </div>
    )
}

export default ProfileInfo;