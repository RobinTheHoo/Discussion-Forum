import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'
export const Header = styled.header`
    background: rgba(265,265,265,0.5);
`
export const Nav = styled.nav`
    min-height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: max(0.9rem);
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8 all ease;
    } 
`

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0 1.5rem;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 48em) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`
export const NavItem = styled.li`
    height: 5em;
    padding: 0 0.75rem;
    display:flex;
    align-items: center;
`
export const NavLink = styled(LinkR)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    @media screen and (max-width: 48em){
        display:none;
    }
`
export const LoginStyle = styled.span`
    color: blue;
    height: 2em;
    display: flex;
    align-items: center;
    padding: 0.5em;

    &:hover {
        display: flex;
        align-items: center;
        height:2em;
        background: rgba(256,256,256,0.5);
        padding: 0.5em;
        border-radius: 3px;
        transition: all 0.2s ease;
    }
`
export const SignupStyle = styled.span`
    height: 2em;
    background: blue;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.5em;
    border-radius: 3px;

    &:hover {
        height: 2em;
        background: rgba(0,100,256,0.75);
        color: white;
        display: flex;
        align-items: center;
        padding: 0.5em;
        border-radius: 3px;        
        transition: all 0.2s ease;
    }
`
export const SearchContainer = styled.div`
    height: 3em;
    width: 17em;
    display: flex;
    align-items: center;
    justify-content: right;    
`
export const SearchBtn = styled.button`
    height: 3em;
    width: 3em;
    border: none;
    //border-radius: 50%;
    background: none;
    display: inline;
    cursor: pointer;

    &:hover {
        color: rgba(0,130,256,0.75);
        &::after {
            opacity:1;
            transform: scale(1);
        }
    }

    &::after {
        content: "";
        z-index: -1;
        background: #000;
        transition: 0.2s ease;
        transform: scale(0.6);
        opacity: 0;
    }

    @media screen and (max-width: 48em){
        display:none;
    }

`
export const SeacrhBar = styled.input`
    border: transparent;
    height: 100%;
    width: ${props => props.isSearching ? 80 : 0 }%;
    transition: all 0.3s ease;
    background-color: rgba(256,256,256,0.6);
    border-radius:10px;
    outline: none;
    font-size: 1.1rem;
    padding-left: ${props => props.isSearching ? 1: 0}em;
    
    &:focus {
        border-color: blue;
    }

    @media screen and (max-width: 48em){
        display:none;
    }
`
