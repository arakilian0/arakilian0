import { Fragment } from 'react'
import _Head from '@comps/Head'
import { Container } from 'react-bootstrap'

function Custom404() {
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container className="main">
          <div className="text-center">
            <h3>404.</h3>
            <h4>I didn't find what you were looking for.</h4>
          </div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default Custom404
  