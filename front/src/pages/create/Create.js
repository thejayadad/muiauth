import React from 'react'
import "./create.css"
import { Container } from '@mui/system'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core';




const Create = () => {

  return (
<div>
<Container>
<h2>Create A Note</h2>


<form autoCapitalize='off'>
<TextField
md={4}
label="Title"
variant='outlined'
fullWidth
sx={{
    marginTop: "14px"
}}

/>


<Button
sx={{
    padding: "20px",
    marginTop: "20px"
}}
>Submit</Button>

</form>
</Container>
</div>
  )
}

export default Create