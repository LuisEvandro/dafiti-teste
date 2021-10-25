import styles from "./styles.module.scss"

export default function PageNotFound(){
    return (
        <div className={styles.container}>
            <h1>Pagina não encontrada</h1>
            <span>404</span>
        </div>
    )
}