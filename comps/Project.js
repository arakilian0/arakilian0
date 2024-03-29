import Image from 'next/image'
import { Card,ListGroup,ListGroupItem,Badge } from 'react-bootstrap'
import profilePic from '../public/me.jpg'

function Project(props) {
    return(
        <Card style={{ width: '18rem', margin: '0 1rem' }}>
            <Image height="2000" src={profilePic} />
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Badge>Primary</Badge>{' '}
                    <Badge>Secondary</Badge>{' '}
                    <Badge>Success</Badge>{' '}
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Link href="#">Card Link</Card.Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Link href="#">Card Link</Card.Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Link href="#">Card Link</Card.Link>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default Project