import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';


const ListItem = (props) => 
{
    useEffect(() => {
        console.log("Bucket List Item:", props.mywishes);
    }, [props.mywishes]); // Only run this effect when the myList prop changes

    //Handles the delete request when button is clicked
    const handleDelete = (e) => 
    {
      e.preventDefault();
  
      axios.delete('http://localhost:4000/api/wishes/' + props.mywishes._id) //delete wish by id
      .then((res) => 
      {
        props.Reload(); //reload when deleted
      })
      .catch((error) => {
        console.error("Error deleting wish:", error); //handles error if wish couldn't be deleted
      });
    }
      
    return (
        <div>
          <Card>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <img src={props.mywishes.picture} alt={props.mywishes.title} />
                <footer>{props.mywishes.dateAdd}</footer>
                <p>{props.mywishes.desc}</p>
                <Button className = "btn btn-danger" onClick = {handleDelete}>Delete</Button> {/*Delete item using delete handler function when button clicked*/}
              </blockquote>
            </Card.Body>  
            <Link to={"/editlist/" + props.mywishes._id} className="btn btn-primary">Edit</Link>
           <Button className = "btn btn-danger" onClick = {handleDelete}>Delete</Button> {/*Delete item using delete handler function when button clicked*/}     
          </Card>
        </div>
      );
}

export default ListItem;