import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Rechazados = ({perro, funcion = null}) => {

  return (

    <Card sx={{ maxWidth: 400 }}>

      <CardActionArea>

        <CardMedia
          component="img"
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
          Otra oportunidad
        </Button>
      </CardActions>

    </Card>

  )
}

export default Rechazados;
