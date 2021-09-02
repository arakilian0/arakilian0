import { Fragment } from 'react'
import _Head from '@comps/Head'
import { Container } from 'react-bootstrap'
import Project from '@comps/Project'

function ProjectsPage() {
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container className="main-padding">
        <div class="main-row">
            <Project 
              name="Mood UI"
              image=""
              descriptions="UI Theme, inspired by Youtube's Darkmode"
              link1="https://atom.io/themes/mood-ui"
              link2="https://marketplace.visualstudio.com/items?itemName=arakilian0.mood-ui"
              keywords="asd,asd,asd,asd" />
            <Project 
              name="Mood UI"
              image=""
              descriptions="UI Theme, inspired by Youtube's Darkmode"
              link1="https://atom.io/themes/mood-ui"
              link2="https://marketplace.visualstudio.com/items?itemName=arakilian0.mood-ui"
              keywords="asd,asd,asd,asd" />
            <Project 
              name="Mood UI"
              image=""
              descriptions="UI Theme, inspired by Youtube's Darkmode"
              link1="https://atom.io/themes/mood-ui"
              link2="https://marketplace.visualstudio.com/items?itemName=arakilian0.mood-ui"
              keywords="asd,asd,asd,asd" />
          </div>
          <div class="main-row">
            <Project 
              name="Mood UI"
              image=""
              descriptions="UI Theme, inspired by Youtube's Darkmode"
              link1="https://atom.io/themes/mood-ui"
              link2="https://marketplace.visualstudio.com/items?itemName=arakilian0.mood-ui"
              keywords="asd,asd,asd,asd" />
            <Project 
              name="Mood UI"
              image=""
              descriptions="UI Theme, inspired by Youtube's Darkmode"
              link1="https://atom.io/themes/mood-ui"
              link2="https://marketplace.visualstudio.com/items?itemName=arakilian0.mood-ui"
              keywords="asd,asd,asd,asd" />
          </div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default ProjectsPage
  