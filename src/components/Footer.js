import React from 'react';
import styled from 'styled-components';

const Container = styled.footer `
    position: absolute;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b6bfbc;
    
`

const FooterItem = styled.div `
    text-decoration: none;
    font-size: 16px;
    color: white;
    font-weight: bold;
`

export default function Footer() {
    return (
        <React.Fragment>
            <Container>
                <FooterItem>Estudando Styled Components</FooterItem>
            </Container>
        </React.Fragment>
    );
}

