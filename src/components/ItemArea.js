import gameData from "../data/data.json"
import StoreItem from "./StoreItem";
import "../styles/itemarea.css"
import {useEffect, useState} from "react";

gameData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});

function ItemArea (props) {

    useEffect(() => {handleSort(false)}, [props.sortSelect])
    useEffect(() => {handleFilterChanges()}, [props.genreSelect, props.platformSelect])

    const [itemList, setItemList] = useState(gameData);
    const [filteredList, setFilteredList] = useState(gameData);

    useEffect(() => {handleSort(true)}, [filteredList]);

    function handleFilterChanges () {
        let filteredData = gameData.filter(filterGenre);
        filteredData = filteredData.filter(filterPlatform);
        if(props.sortSelect === ""){
            setItemList(filteredData);
        } else {
            setFilteredList(filteredData);
        }
    }

    function filterGenre (data) {
        if(props.genreSelect.FirstPersonShooter && data.genre === "First-Person Shooter"){
            return true;
        }
        if(props.genreSelect.Racing && data.genre === "Racing"){
            return true;
        }
        if(props.genreSelect.CoOp && data.genre === "Co-Op"){
            return true;
        }
        if(props.genreSelect.OpenWorld && data.genre === "Open World"){
            return true;
        }
        return false;
    }

    function filterPlatform (data) {
        if(props.platformSelect.Xbox && data.platform.includes("Xbox")){
            return true;
        }
        if(props.platformSelect.PC && data.platform.includes("PC")){
            return true;
        }
        if(props.platformSelect.PlayStation && data.platform.includes("PlayStation")){
            return true;
        }
        if(props.platformSelect.Switch && data.platform.includes("Switch")){
            return true;
        }
        return false;
    }


    function handleSort(afterFilter){
        let tempList;
        if(afterFilter){
            tempList = [...filteredList]
        } else {
            tempList = [...itemList]
        }
        switch (props.sortSelect){
            case "Price, Ascending" :
                tempList.sort(sortAscending);
                setItemList(tempList);
                break;
            case "Price, Descending" :
                tempList.sort(sortDescending);
                setItemList(tempList);
                break;
            case "Alphabetical" :
                tempList.sort(sortAlphabetical);
                setItemList(tempList);
                break;
        }
    }

    function sortAscending (a, b) {
        if(a.price > b.price){
            return 1;
        }
        if(a.price < b.price){
            return -1;
        }
        return 0;
    }
    function sortDescending (a, b) {
        if(a.price > b.price){
            return -1;
        }
        if(a.price < b.price){
            return 1;
        }
        return 0;
    }
    function sortAlphabetical (a, b) {
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        if(name1 > name2){
            return 1;
        }
        if(name1 < name2){
            return -1;
        }
        return 0;
    }
    return (
        <div id="item-area">
            {itemList.map((item, index) => (
                <StoreItem key={item.name}
                    name={item.name} description={item.description}
                    studio={item.studio} genre={item.genre}
                    platform={item.platform} price={item.price}
                    thumbnail={item.thumbnail} addToCart={() => props.addToCart(item)}
                />
            ))}
        </div>
    )
}
export default ItemArea;