import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: wheat;
    text-decoration: none;
    font-size: 23px;
    font-family: 600;
 `
const Container = styled(Box)`
    display: flex;
    
`
const Component = styled(Typography)`
    margin: 30px;
    
`
export default function Header() {
    return (
        <Container>
            <Component>
                <StyledLink to={'/'}>TotalPost</StyledLink>
            </Component>
            <Component>
                <StyledLink to={'/totalUsers'}>TotalUser</StyledLink>
            </Component>
            <Component>
                <StyledLink to={'/allPosts'}>CreatePost</StyledLink>
            </Component>
            <Component>
                <StyledLink to={'/allUsers'}>User</StyledLink>
            </Component>
            <Component>
                <StyledLink to={'/postForm'}>Post</StyledLink>
            </Component>
            <Component>
                <StyledLink to={'/userForm'}>Profile</StyledLink>
            </Component>
        </Container>
    )
}
