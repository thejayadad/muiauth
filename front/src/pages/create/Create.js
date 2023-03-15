import React from 'react'
import "./create.css"
import { Container } from '@mui/system'
import { makeStyles, } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Create = () => {

  return (
<div>
<Container>
<h2>Create A Note</h2>
<Stack spacing={2} direction="row">

<form>

<Button variant="contained">Submit</Button>

</form>
</Stack>



</Container>
</div>
  )
}

export default Create