import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    HamburgerMenu,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemButton,
    NavButtonLink,
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            ULTRA
                        </NavLogo>
                        <HamburgerMenu onClick={handleClick} >
                            {click ? <FaTimes /> : <FaBars />}
                        </HamburgerMenu>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>
                            <NavItemButton>
                                {button ? (
                                    <NavButtonLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavButtonLink>
                                ) : (
                                    <NavButtonLink to="/sign-up">
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavButtonLink>
                                )}
                            </NavItemButton>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
