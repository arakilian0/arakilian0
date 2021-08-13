import { Fragment } from 'react'
import Head from 'next/head'

function _Head(props) {
    return(
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Load theme in local storage */}
                <link rel="stylesheet" href="theme/Default.css" />

                <title>arakilian0.com | 
                    { props.title ? ' ' + props.title : 'Something else.' }
                </title>

                { props.children }
            </Head>
        </Fragment>
    )
}

export default _Head