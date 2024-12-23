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

    //Do when wish id changes
    useEffect(() => {
        //GETS wish from id given
        axios.get('http://localhost:4000/api/wishes/' + id)
            .then((response) => {
                setTitle(response.data.title);
                setDateAdd(response.data.dateAdd);
                setPicture(response.data.picture);
                setDescription(response.data.desc);
            })
            //If there's an error
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

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
            navigate('/main');
        });
    }

    //Display the movie information
    return (
        <div>
            <h3>Edit a wish on your bucket list</h3>
            <div className="container w-50 mt-6">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Wish Title: </label>
                    <input type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ backgroundColor: '#ebead3', border: '1px solid #a3a287'  }} />
                </div>
                <div className="form-group">
                    <label>Date Added: </label>
                    <input type="text" 
                    className="form-control" 
                    value={dateAdd} 
                    onChange={(e) => setDateAdd(e.target.value)} 
                    style={{ backgroundColor: '#ebead3', border: '1px solid #a3a287'  }} />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                    className="form-control" 
                    value={desc} 
                    onChange={(e) => setDescription(e.target.value)} 
                    style={{ backgroundColor: '#ebead3', border: '1px solid #a3a287'  }} />
                </div>
                <div className="form-group">
                    <label>Picture URL: </label>
                    <input type="text" 
                    className="form-control" 
                    value={picture} 
                    onChange={(e) => setPicture(e.target.value)} 
                    style={{ backgroundColor: '#ebead3', border: '1px solid #a3a287'  }} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Wish" className="btn btn-success" style={{ color: '#a9dfbf' }} />
                </div>
            </form>
        </div>
        </div>
    );
}