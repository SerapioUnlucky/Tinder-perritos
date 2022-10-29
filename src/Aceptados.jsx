import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Aceptados = ({perro, funcion = null}) => {
  return (
    
    <Card sx={{ maxWidth: 400 }}>

    <CardActionArea>

      <CardMedia
        component="img"
        width="400"
        height="300"
        image={perro.message}
        alt="perrito"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {perro.message.substring(30, 36)}
        </Typography>
      </CardContent>

    </CardActionArea>

    <CardActions>
      <Button onClick={() => funcion(perro)}>
        Arrepentirse
      </Button>
    </CardActions>

  </Card>

  )
}

export default Aceptados;
