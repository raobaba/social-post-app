import React from 'react'
import {Box,TextField,styled} from '@mui/material';
const Container = styled(Box)`
  width: 40%;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  padding-top: 10px !important;
  
`
export default function UserForm() {
  return (
    <Container>
       <TextField
          id="name"
          label="Name"
          type="text"
        />
    </Container>
  )
}
