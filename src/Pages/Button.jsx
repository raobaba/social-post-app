import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: #f3f8f5;
    text-decoration: none;
    font-size: 23px;
    font-family: 600;
 `
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > * ': {
        marginRight: '40px !important',
        textDecoration: 'none',
        fontSize: 16,
        alignItems: 'center',
        cursor: 'pointer',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
        background:'green ',
    }
}))
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
