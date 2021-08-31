import { Fragment } from 'react'
import _Head from '@comps/Head'

import { Container } from 'react-bootstrap'

function HomePage() {
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container>
            <div>Welcome to my portfolio!</div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default HomePage
  