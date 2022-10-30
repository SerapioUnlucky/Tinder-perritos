import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Candidado = ({perro}) => {


    return (

        <Card variant="outlined" sx={{ maxWidth: 400, maxHeight: 600, ml: 14 }}>
                <CardMedia
                    component="img"
                    width="400"
                    height="300"
                    image={perro.message}
                    alt="perrito"
                />

            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {perro.message.substring(30, 36)}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default Candidado;