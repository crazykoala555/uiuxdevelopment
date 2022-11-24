import "../styles/cartarea.css"
import {Typography} from "@mui/material";
import CartItem from "./CartItem";
import {useEffect, useState} from "react";

function CartArea (props) {

    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {calculateTotal()}, [props.cart])

    function calculateTotal () {
        let tempTotal = 0;
        for(let i = 0; i < props.cart.length; i++){
            console.log(props.cart[i].quantity)
            tempTotal = (props.cart[i].quantity * props.cart[i].game.price) + tempTotal;
        }
        tempTotal = Math.round(tempTotal * 100)/100
        setTotalValue(tempTotal);
    }

    return (
        <div id="cart-area">
            <Typography variant="h6">Your Cart:</Typography>
            {props.cart.map((item, index) => (
                <CartItem
                    key={item.game.name} game={item.game} quantity={item.quantity}
                    addToCart={() => props.addToCart(item.game)}
                    removeFromCart={() => props.removeFromCart(item.game)}
                />
            ))}
            <div id="total-area">
                <hr/>
                Subtotal: {totalValue}
                <br/>
                +Tax(7%): {Math.round(totalValue * 0.07 * 100)/100}
                <hr/>
                <b>Final Cost: {Math.round((totalValue + Math.round(totalValue * 0.07 * 100)/100) * 100)/100}</b>
            </div>
        </div>
    )
}
export default CartArea;