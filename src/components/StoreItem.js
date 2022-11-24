import CardMedia from "@mui/material/CardMedia";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import "../styles/itemarea.css"
import PlatformItem from "./PlatformItem";

function StoreItem (props) {
    return(
        <div className="itemCard">
            <Card sx={{ minWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={props.thumbnail}
                    alt={props.name}
                />
                <CardContent>
                    <div className="titleContent">
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            ${props.price}
                        </Typography>
                    </div>
                    <Typography variant="h6" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Genre: {props.genre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Available on:
                    </Typography>
                    <div className="platformArea">
                        {props.platform.map((item, index) => (
                            <PlatformItem
                                key={item}
                                platform={item}
                            />
                        ))}
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="medium" onClick={props.addToCart}>Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default StoreItem;