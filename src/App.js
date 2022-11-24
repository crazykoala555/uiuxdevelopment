import './styles/App.css';
import FilterArea from "./components/FilterArea";
import ItemArea from "./components/ItemArea";
import CartArea from "./components/CartArea";
import {Typography} from "@mui/material";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);

    const [sortSelect, setSortSelect] = useState("");

    const [genreSelect, setGenreSelect] = useState({
        FirstPersonShooter: true,
        Racing: true,
        CoOp: true,
        OpenWorld: true
    });

    const [platformSelect, setPlatformSelect] = useState({
        Xbox: true,
        PC: true,
        PlayStation: true,
        Switch: true
    });

    function addToCart(item){
        let tempCart = [];
        let alreadyExists = false;

        for(let i = 0; i < cart.length; i++){
            if(cart[i].game === item){
                alreadyExists = true;
                let newGameWithQuantity = {
                    game : item,
                    quantity: cart[i].quantity+1
                }
                tempCart.push(newGameWithQuantity);
            } else {
                tempCart.push(cart[i]);
            }
        }

        if(!alreadyExists){
            let newGameWithQuantity = {
                game : item,
                quantity: 1
            }
            tempCart.push(newGameWithQuantity);
        }
        setCart(tempCart);
    }

    function removeFromCart (item) {

        let tempCart = [];

        for(let i = 0; i < cart.length; i++){
            if(cart[i].game === item && cart[i].quantity > 1){
                let newGameWithQuantity = {
                    game : item,
                    quantity: cart[i].quantity-1
                }
                tempCart.push(newGameWithQuantity);
            } else if (cart[i].quantity <= 1) {

            } else {
                tempCart.push(cart[i]);
            }
        }
        setCart(tempCart);
    }


    return (
    <div className="App">
        <FilterArea
            sortSelect={sortSelect} setSortSelect={setSortSelect}
            genreSelect={genreSelect} setGenreSelect={setGenreSelect}
            platformSelect={platformSelect} setPlatformSelect={setPlatformSelect}
        />
        <CartArea cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
        <div id="itemArea">
            <div id="siteTitle">
                <Typography variant="h3">The Game Zone</Typography>
            </div>
            <div id="content">
                <ItemArea sortSelect={sortSelect} genreSelect={genreSelect}
                          setSortSelect={setSortSelect} platformSelect={platformSelect}
                          cart={cart} setCart={setCart} addToCart={addToCart}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
