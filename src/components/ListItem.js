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
          <div className="container w-50 mt-6">
          <Card style={{ backgroundColor: '#ebead3' }}>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <header className="libre-baskerville-bold">{props.mywishes.title}</header>
                <img src={props.mywishes.picture} alt={props.mywishes.title} //Makes Image change with div
                  style={{ maxWidth: '40%', height: 'auto' }} //Adjust size if needed 
                  />
                <footer style={{ fontSize: '15px' }}>{props.mywishes.dateAdd}</footer>
                <p>{props.mywishes.desc}</p>
                <Link to={"/editlist/" + props.mywishes._id} className="btn btn-success" style={{ color: '#a9dfbf' }}>Edit</Link>
                <br></br>
                <p></p>
                <Button style={{ backgroundColor: '#495e49', border: '2px #495e49', color: '#a9dfbf' }}  onClick = {handleDelete}>Delete</Button> {/*Delete item using delete handler function when button clicked*/}
              </blockquote>
            </Card.Body>  
          </Card>
        </div>
        </div>
      );
}

export default ListItem;