import React from 'react'
import "./post.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Post = () => {
  return (
    <div>

        <Card>

            <CardHeader
            action={
                <IconButton>
                    <DeleteOutlineIcon />
                </IconButton>
            }
            />
        </Card>
    </div>
  )
}

export default Post