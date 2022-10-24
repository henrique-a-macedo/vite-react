import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import { Sidebar } from "./Components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post 
                        author="Henrique" 
                        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo pariatur excepturi, impedit eveniet exercitationem placeat repellendus, voluptates consequuntur voluptate, officia ex reiciendis voluptatum. Saepe pariatur atque asperiores corrupti laborum temporibus!"
                    />
                </main>
            </div>
        </div>
    )
}
