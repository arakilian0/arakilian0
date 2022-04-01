import Link from 'next/link'
import { Modal, Button } from 'react-bootstrap'

function Resume(props) {
    return(
        <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>MichaelArakilian.PDF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Size: 58.4KB<br/>
                Created: Jan 31, 2019<br/>
                Updated: April 1, 2022
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Link href="/resume.pdf" target="_blank" download>
                    <Button variant="success">View</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default Resume