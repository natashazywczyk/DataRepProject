import React from 'react';

const Ideas = () => {
  return (
    <div>
        {/*Add potential ideas for user to add*/}
        <h1>Ideas!</h1>
        <h4>Below are just a couple of ideas/suggestions of what you could add to your bucket list</h4>

        <div className="container mt-5">
          <div className="row mb-3">
            {/* Row 1 */}
            <div className="col-md-6">
              <div className="p-3" style={{ backgroundColor: 'transparent' }}>
                <img
                  src="https://www.novascotia.com/sites/default/files/2021-05/Franey-sunrise-hike-1920x1080.jpg"
                  alt="hiking-img"
                  className="img-fluid" //Makes Image change with div
                  style={{ maxWidth: '100%', height: 'auto' }} //Adjust size if needed
                />
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="p-3 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'transparent' }} >
                <h5>Have you ever thought of a hiking trail?</h5>
                <p>Has there ever been a place you would love to hike in? Well, there you go! That's an idea you can add to your bucket list. Whether it is somewhere local or abroad, 
                  you can easily add it as something you can/aim to do in the future. You don't have to add something crazy far away for it to valid as a wish to achieve.
                </p>
                </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row mb-3">
            {/* Row 2 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row mb-3">
            {/* Row 3 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row mb-3">
            {/* Row 4 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
          </div>
        </div>  
    </div>
  );
}

export default Ideas;