import { Fragment } from 'react'
import _Head from '@comps/Head'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styles from '@styles/module/page/Home.module.css'

import profilePic from '../public/me.jpg'

function HomePage() { 
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container className="main">
            <div className={styles.leftMain} id="leftMain">
              <Image src={profilePic} width="100" height="100" className={styles.profilePic} alt="Picture of the author" />
            </div>
            <div className={styles.rightMain}>
              <h2>Full Stack Developer</h2>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.
            </div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default HomePage
  