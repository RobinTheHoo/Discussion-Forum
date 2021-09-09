import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import {AiFillCaretDown} from 'react-icons/ai';
import {
        Header, 
        Nav, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLink,
        LoginStyle,
        SignupStyle,
        SearchContainer,
        SeacrhBar,
        SearchBtn} from './Navbar.style';




const Navbar = () => {

    const [isActive, setIsActive] =  React.useState(false);
    const _toggleSearch = () => {
        setIsActive(!isActive);
    }

    return (
        <Header>
            <>
                <Nav>
                      
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavLogo to="/">FORUM</NavLogo>
                            <NavItem>
                                <NavLink to="/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/">Categories
                                    <AiFillCaretDown size={12}/>
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                        
                        
                        
                        <NavMenu>
                            <SearchContainer>                            
                                <SeacrhBar type="search" isSearching={isActive}/>
                                <SearchBtn onClick={_toggleSearch}>
                                    {isActive ? (
                                        <GoSearch size={22}/>
                                    ) : (
                                        <GoSearch size={22}/>
                                    )}                                    
                                </SearchBtn>                                                                                                                    
                            </SearchContainer>
                            <NavItem>
                                <NavLink to="/">
                                    <LoginStyle>Log In</LoginStyle>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/">
                                    <SignupStyle>Sign Up</SignupStyle>
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                        

                </Nav>    
            </>
        </Header>
    )
}

export default Navbar;
