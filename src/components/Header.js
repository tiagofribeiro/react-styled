import React from "react";
import styled from "styled-components";

const NavBar = styled.div `
    background-color: #457667;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`

const NavItem = styled.a `
    font-size: 14px;
    font-weight: bold;
    color: white;
    padding: 20px;
`

export default function Header() {
    return (
        <NavBar>
            <NavItem href="#">Home</NavItem>
            <NavItem>Contato</NavItem>
            <NavItem>Sobre</NavItem>
        </NavBar>
    );
}

