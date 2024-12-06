import { useState } from "react";
import axios from "axios";

const AddItem = () => {
    //Information to be stored
    const [title, setTitle] = useState('');
    const [dateAdd, setDateAdd] = useState('');
    const [desc, setDescription] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const wish = {title,year,picture, desc};
        console.log(wish);

        axios.post('http://localhost:4000/api/mywishes', wish)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    }
}

export default AddItem;