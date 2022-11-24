import {Button, ButtonGroup} from "@mui/material";

function CartItem (props) {

    return(
        <div className="cartItem">
            <b className="cartItemTitle">{props.game.name}</b>
            <br/>
            ${props.game.price}
            <br/>
            Quantity: {props.quantity}
            <br/>
            <ButtonGroup variant="outlined" size="small" aria-label="small button group">
                <Button onClick={props.addToCart}>+</Button>
                <Button onClick={props.removeFromCart}>-</Button>
            </ButtonGroup>
        </div>
    )
}
export default CartItem;