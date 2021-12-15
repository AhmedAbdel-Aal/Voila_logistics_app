import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";





function Restaurant(props){
    const{restaurant} = props
    let navigate = useNavigate();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
          
      <CardContent>
      <Typography variant="h5" component="div">
        {restaurant.r_name}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {restaurant.r_country + ", "+ restaurant.r_city}
      </Typography>
      
      <Typography variant="body2">
        {restaurant.r_street_name}
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small" onClick={()=>{navigate(`/restaurants/${restaurant.r_id}`)}}>Show Menus</Button>
    </CardActions>      
      
      
      </Card>
    </Box>
  );
}

export default Restaurant

