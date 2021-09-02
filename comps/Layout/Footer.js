import { Fragment } from 'react'
import styles from '@styles/module/Layout.module.css'
import { Container } from 'react-bootstrap'

function Footer() {
    return(
        <footer className={styles.footer}>
            <Container>
                <div>Site designed and built by me.</div>
            </Container>
        </footer>
    )
}

export default Footer