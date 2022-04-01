import { Fragment } from 'react'
import _Head from '@comps/Head'
import Image from 'next/image'
import { Container,Badge } from 'react-bootstrap'
import styles from '@styles/module/page/Home.module.css'

import profilePic from '../public/me.jpg'

function HomePage() { 
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container className="main">
            <div className={styles.leftMain} id="leftMain">
              {/* <Image src={profilePic} width="100" height="100" className={styles.profilePic} alt="Picture of the author" /> */}
            </div>
            <div className={styles.rightMain}>
              <h2 className="mob-text-space">User Experience Designer</h2>
              <p className="mob-text-space">I am a motivated UX Designer with a passion for creativity and problem solving.</p>
              <p className="mob-text-space">Hobbies:</p>
              <div className="mob-text-space">
                <Badge>research</Badge>{' '}
                <Badge>hack</Badge>{' '}
                <Badge>teach</Badge>{' '}
                <Badge>read</Badge>{' '}
                <Badge>draw</Badge>{' '}
                <Badge>animate</Badge>{' '}
                <Badge>write</Badge>{' '}
                <Badge>cook</Badge>{' '}
                <Badge>travel</Badge>{' '}
                <Badge>games</Badge>{' '}
              </div>
            </div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default HomePage
  