import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@styles/module/Layout.module.css'

import rgbIcon from '../../public/icon/rgb.svg'
import Resume from '@comps/Resume'
import { Navbar,Container,Nav,Button,NavDropdown } from 'react-bootstrap'

function Header() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Resume 
                show={show} 
                handleClose={handleClose}/>
                <Link href="/" passHref><Navbar.Brand>Michael Arakilian</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/art" passHref><Nav.Link>Portfolio</Nav.Link></Link>
                        <Link href="/arts" passHref><Nav.Link>Writings</Nav.Link></Link>
                        <Link href="/work" passHref><Nav.Link>Contact</Nav.Link></Link>
                    </Nav>
                    <Nav>
                        <NavDropdown 
                            className={ styles.themeDropdown } 
                            title={ <Image src={rgbIcon}></Image> } 
                            id="collasible-nav-dropdown">
                                <Link href="/"><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-success" onClick={handleShow}>Resume</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header