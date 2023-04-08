import React from 'react'
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background:#2874f2;
    height: 55px; 
`
const StyledLink = styled(Link)`
    color: wheat;
    text-decoration: none;
    margin-right: 12%;
 `
 const Container = styled(Toolbar)`
     display: flex;
     justify-content: space-around;
 `
export default function Navbar() {
    return (
        <StyledHeader position="static">
            <Container>
                <Typography>
                    <StyledLink>TotalPost</StyledLink>
                </Typography>
                <Typography>
                    <StyledLink>TotalUser</StyledLink>
                </Typography>
                <Typography>
                    <StyledLink>AllPosts</StyledLink>
                </Typography>
                <Typography>
                    <StyledLink>AllUsers</StyledLink>
                </Typography>
                <Typography>
                    <StyledLink>PostForm</StyledLink>
                </Typography>
                <Typography>
                    <StyledLink>UserForm</StyledLink>
                </Typography>
            </Container>
        </StyledHeader>
    )
}
