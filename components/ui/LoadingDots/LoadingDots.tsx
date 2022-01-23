import style from './LoadingDots.module.css'

const LoadingDots: React.FC = () => {
    return (
        <span className={style.root}>
            <span />
            <span />
            <span />
        </span>
    )
}

export default LoadingDots