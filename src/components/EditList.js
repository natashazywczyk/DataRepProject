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

}