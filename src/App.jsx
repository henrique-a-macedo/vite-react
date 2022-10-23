import { Header } from "./Components/Header"
import { Post } from "./Post"

import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./Components/Sidebar"

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
                    <Post 
                        author="Teste" 
                        content="BORA DOIDO"
                    />
                </main>
            </div>
        </div>
    )
}
