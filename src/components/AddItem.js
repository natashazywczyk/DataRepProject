import { useState } from "react";
import axios from "axios";

const AddItem = () => {
    //Information to be stored
    const [title, setTitle] = useState('');
    const [dateAdd, setDateAdd] = useState('');
    const [desc, setDescription] = useState('');
    const [picture, setPicture] = useState('');
}

export default AddItem;