import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';


const ListItem = () => 
{
    useEffect(() => {
        console.log("Bucket List Item:", props.mywishes);
      }, [props.mywishes]); // Only run this effect when the myList prop changes
      
    return (
        <div>
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <img src={props.mywishes.picture} alt={props.mywishes.title} />
                <footer>{props.mywishes.dateAdd}</footer>
                <p>{props.mywishes.desc}</p>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      );
}

export default ListItem;