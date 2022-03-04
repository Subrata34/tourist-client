import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Box = (props) => {
  console.log(props);
  const { _id, name, img, price } = props.data;
  return (
    <div>
      <Card sx={{ maxWidth: 360, margin: "15px",borderRadius:"15px" }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <h3>Paid:${price}</h3>
          </Typography>
        </CardContent>
        <CardActions style={{ paddingLeft: "60px", paddingTop: "-5px" }}>
          <Link to={`/booking/${_id}`}>
            <Button size="small" variant="contained">booking</Button>
          </Link>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Box;
