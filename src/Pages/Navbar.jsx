import React from 'react'
import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import Search from './../Components/Search';
import Header from './Header';

const StyledHeader = styled(AppBar)`
    background:#2874f2;
    height: 65px; 
`
const StyledLink = styled(Link)`
    color: wheat;
    text-decoration: none;
    font-size: 23px;
    font-family: 600;
 `
const Container = styled(Toolbar)`
     display: flex;
     justify-content: space-around;
 `
const Image = styled('img')({
    width: '55px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginTop: '5px'
});

export default function Navbar() {
    return (
        <StyledHeader position="static">
            <Container>
                    <StyledLink style={{position:'static'}} to={'/'}>
                        <Image src={'https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-green-recycling-logo-png-image_881104.jpg'} alt="logo" />
                    </StyledLink>
                    <Search />
                   <Header />
            </Container>
        </StyledHeader>
    )
}
