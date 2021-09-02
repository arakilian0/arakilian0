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
                <Modal.Title>MichaelArakilian.pdf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Size: 1MB<br/>
                Created: Jan 31, 2019<br/>
                Updated: September 1, 2021
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Link href="/README.md" target="_blank" download>
                    <Button variant="success">Download</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default Resume