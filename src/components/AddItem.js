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
        const wish = {title, dateAdd, picture, desc};
        console.log(wish);

        axios.post('http://localhost:4000/api/wishes', wish)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    }

    return (
        <div>
          <h3>Create a wish to add to your bucket list!</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Add Wish Title: </label>
                  <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
              </div>
              <div className="form-group">
                <label>Add Date Wish Was Added: </label>
                  <input type="text"
                    className="form-control"
                    value={dateAdd}
                    onChange={(e) => { setDateAdd(e.target.value) }}
                  />
              </div>
              <div className="form-group">
                <label>Add Wish Description: </label>
                  <input type="text"
                    className="form-control"
                    value={desc}
                    onChange={(e) => { setDescription(e.target.value) }}
                  />
              </div>
              <div className="form-group">
                <label>Add Wish Picture: </label>
                  <input type="text"
                    className="form-control"
                    value={picture}
                    onChange={(e) => { setPicture(e.target.value) }}
                  />
                </div>
                <div>
                  <input type="submit" value="Add Movie"></input>
                </div>
              </form>
          </div>
      );
}

export default AddItem;