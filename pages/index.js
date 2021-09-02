import { Fragment } from 'react'
import _Head from '@comps/Head'
import Image from 'next/image'
import { Container,Badge } from 'react-bootstrap'
import styles from '@styles/module/page/Home.module.css'

import profilePic from '../public/me.jpg'

function HomePage() { 
    return(
      <Fragment>
        <_Head title="My portfolio" />
        <Container className="main">
            <div className={styles.leftMain} id="leftMain">
              <Image src={profilePic} width="100" height="100" className={styles.profilePic} alt="Picture of the author" />
            </div>
            <div className={styles.rightMain}>
              <h2 className="mob-text-space">Full Stack Developer</h2>
              <p className="mob-text-space">I am a motivated full stack developer with a passion for creativity and problem solving. I have some experience with desktop and mobile as well. For that reason, I claim the title <span className="highl">Full Stack Developer</span>. Including <b>Web</b> feels limiting.</p>
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
  