import { Fragment } from 'react'
import _Head from '@comps/Head'
import { Container } from 'react-bootstrap'

function ContactPage() {
    return(
      <Fragment>
        <_Head title="not something else" />
        <Container className="main">
          <div>Welcome to my contact page!</div>
        </Container>
      </Fragment>
    ) 
  }
  
  export default ContactPage
  