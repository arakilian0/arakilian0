import { Fragment } from 'react'
import styles from '@styles/module/Layout.module.css'

function Header() {
    return(
        <Fragment>
            <header className={styles.header}>
                <div>LOGO</div>
                <nav>
                    <ul>
                        <li>portfolio</li>
                        <li>foss</li>
                        <li>posts</li>
                    </ul>
                </nav>
                <button>Click me</button>
            </header>
        </Fragment>
    )
}

export default Header