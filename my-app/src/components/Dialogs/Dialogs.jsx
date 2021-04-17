import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Dimych
                </div>
                <div className={style.dialog}>
                    Ahdrey
                </div>
                <div className={style.dialog}>
                    Sveta
                </div>
                <div className={style.dialog}>
                    Victor
                </div>
                <div className={style.dialog}>
                    Valery
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;