import Items from './Items';
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () =>
{
    const [wishes, setWishes] = useState([]);

    //Reload function that allows page to instantly refresh when movie deleted
    const reloadData = () => 
    {
      axios.get('http://localhost:4000/api/wishes') //get api server
      .then((response) => {
        console.log(response.data);
        setWishes(response.data.wishes); //display wish items
      })
      .catch((error) => {
        console.log(error); //handle error displaying bucket list
      })
    }

    //Reload when used
    useEffect(() => {
        reloadData();
    },[]);

    return(
        <div>
            <h3>View your wishes below</h3>
            

            <Items mywishes={wishes} ReloadData = {reloadData} /> {/*reload page when item deleted */}
        </div>
    );
}

export default Main;
