import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../GlobalStyles';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavButton,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);

    const closeMobileMenu = ()=> setClick(false);

    const [button, setButton] = useState(true);
    const showButton = ()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu} click={click}>
                        <NavIcon/>
                            ULTRA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> :<FaBars/> }
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/"> Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'> Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'> Products</NavLinks>
                            </NavItem>
                            <NavButton>
                                {button? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button primary> Sign Up</Button>
                                    </NavBtnLink>
                                ) :(
                                    <NavBtnLink to='/sign-up'>
                                        <Button fontBig primary> Sign Up</Button>
                                    </NavBtnLink>
                                )
                                }
                            </NavButton>
                        </NavMenu>
                        
                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>  
        </>
    )
}

export default Navbar;

