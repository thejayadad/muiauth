import React from 'react'
import "./home.css"
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Post from '../../components/post/Post';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';


const Home = () => {
  return (

    <Container>
        <Grid container spacing={3}>
        <Post />
        </Grid>
    </Container>
  )
}

export default Home