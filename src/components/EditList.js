import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//Import functions and hooks
export default function EditList(props) {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [dateAdd, setDateAdd] = useState("");
    const [picture, setPicture] = useState("");
    const [desc, setDescription] = useState("");
    const navigate = useNavigate(); //Allows navigation to other roots

    //Allows for only one page to run at a time
    const handleSubmit = (event) => {
        event.preventDefault(); //Don't allow reload to default page
        const newWish = { id, title, dateAdd, picture, desc };
        
        //Sets changes to wish using PUT request
        axios.put('http://localhost:4000/api/wishes/' + id, newWish)
            .then((res) => {
            //Show in console log the new information
            console.log(res.data);
    
            //Go to read after editing wish
            navigate('/read');
        });
    }
    

}