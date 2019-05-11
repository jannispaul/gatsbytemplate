import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const MobileNav = styled.div`
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    padding-top: 100px;
    width: 100%;
    z-index: 2;
    background: var(--color-white);
    /* background: ${props => props.showMobileMenu ? "blue" : "green"}; */
    transform: ${props => props.showMobileMenu ? "translateY(0%)" : "translateY(-100%)"};
    transition: transform 400ms cubic-bezier(0.215, 0.610, 0.355, 1);
`

/*Mobile Nav Links with animation based on prop */
const StyledLink = styled(Link)`
    transform: ${props => props.showMobileMenu ? "translateY(0%)" : "translateY(-100px)"};
    color:  var(--color-black);
    margin-top: 5vh;
    display: block;
    text-decoration: none;
    text-align: center;

    &.active {
      color: var(--color-accent);
    }
    
    /*animation of Menu items flying in slightly delayed*/
    &:last-of-type {
        transition-delay: 0;
    }
    &:nth-of-type(4) {
        transition-delay: 50ms;
    }
    &:nth-of-type(3) {
        transition-delay: 100ms;
    }
    &:nth-of-type(2) {
        transition-delay: 150ms;
    }
    &:nth-of-type(1) {
        transition-delay: 200ms;
    }
    transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
`

const MobileMenu = props => {
    // if(props.showMobileMenu){
    //     console.log("test")
    // }
    return(
        <MobileNav showMobileMenu={props.showMobileMenu}>
            <StyledLink 
                to="/about/"
                showMobileMenu={props.showMobileMenu}
                activeClassName="active">
                About
            </StyledLink>
            <StyledLink 
                to="/x/"
                showMobileMenu={props.showMobileMenu}
                activeClassName="active">
                Item 2
            </StyledLink>
            <StyledLink 
                to="/x/"
                showMobileMenu={props.showMobileMenu}
                activeClassName="active">
                Item 3
            </StyledLink>
            <StyledLink 
                to="/x/"
                showMobileMenu={props.showMobileMenu}
                activeClassName="active">
                Item 4
            </StyledLink>
        </MobileNav>
    )
};
export default MobileMenu