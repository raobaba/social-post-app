import React from 'react'
import { styled, Typography, Box } from "@mui/material";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: wheat;
    text-decoration: none;
    margin-right: 12%;
 `
const Container = styled(Box)`
    display: flex;
    justify-content: space-around;
`
export default function Header() {
    return (
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
    )
}
