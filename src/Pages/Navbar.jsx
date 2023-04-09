import React,{useState} from 'react'
import { AppBar, Toolbar,IconButton,Drawer,List, Box, styled } from "@mui/material";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import Search from './../Components/Search';
import Button from './Button';

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
const CustomButtonWrapper = styled(Box)(({theme})=>({
    
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
const MenuButton = styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
     display:'block'
    }
}))
export default function Navbar() {
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const ListFunction = () => (
        <Box style={{ width: 250}} onClick={handleClose}>
            <List>
                <listItem button>
                    <Button />
                </listItem>
            </List>
        </Box>
    );
    return (
        <StyledHeader position="static">
            <Container>
                <StyledLink style={{ position: 'static' }} to={'/'}>
                    <Image src={'https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-green-recycling-logo-png-image_881104.jpg'} alt="logo" />
                </StyledLink>
                <Search />
                <CustomButtonWrapper>
                    <Button />
                </CustomButtonWrapper>
                <MenuButton color='inherit' onClick={handleOpen}>
                    <Menu />
                </MenuButton>
                <Drawer anchor="right" open={open} onClose={handleClose} >
                    {ListFunction()}
                </Drawer>
            </Container>
        </StyledHeader>
    )
}
