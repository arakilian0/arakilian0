import { Fragment } from 'react'
import _Head from '@comps/Head'

function Custom404() {
    return(
      <Fragment>
        <_Head title="not something else" />
        <div>Welcome to my 404 page!</div>
      </Fragment>
    ) 
  }
  
  export default Custom404
  