import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img classname={styles.avatar} src="https://avatars.githubusercontent.com/u/102076918?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Henrique Macedo</strong>
                        <span>Web Dev</span>
                    </div>
                </div>

                <time title="23 de outubro às 19:00"dateTime="2022-10-23 19:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Doido loco</p>
                <p><a href="">só entrar aqui www.lepa.com</a></p>
                <p><a href="">#sobora</a></p>
            </div>
        </article>
    )
}