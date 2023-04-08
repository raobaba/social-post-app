import React from 'react'
import { AppBar, Toolbar, styled } from "@mui/material";
import Header from './Header';

const StyledHeader = styled(AppBar)`
    background:#2874f2;
    height: 55px;
`

export default function Navbar() {
    return (
        <StyledHeader position="static">
            <Toolbar>
                <Header />
            </Toolbar>
        </StyledHeader>
    )
}
