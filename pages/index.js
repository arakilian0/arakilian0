import { Fragment } from 'react'
import _Head from '@comps/Head'

function HomePage() {
    return(
      <Fragment>
        <_Head 
          title="not something else">
            
        </_Head>
        <div>Welcome to my portfolio!</div>
      </Fragment>
    ) 
  }
  
  export default HomePage
  