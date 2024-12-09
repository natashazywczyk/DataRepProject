import React from 'react';

const Home = () => {
  return (
    <div>
        {/*Add Homepage content here, introduce app and its use*/}
        <h1 className="libre-baskerville-bold">Welcome!</h1>
        <h3 className="libre-baskerville-bold">This is my Bucket List App!</h3>

        <br></br>
        
        <p>What can you do in this app?
          Great question!
          <br></br>
          <br></br>
          In this app, you can seamlessly and easily add, delete and edit locations you would like to visit, <br></br>
          new foods you'd like to try or anything to wish to do in the future.
          <br></br>
          <br></br>
          Be it something as small as starting a new hobby, or something as big as travelling around the world, <br></br><br></br>
          you can freely add these wishes to the app
        </p>
        <br></br>
        <br></br>

        {/*Images in one row*/}
        <div className="container mt-6">
        <div className="row mb-3">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="p-1 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'transparent' }}>
              <img
                src="https://i.natgeofe.com/k/f576c284-661a-4046-ba51-fa95699e1a8b/hawaii-beach.png"
                alt="beach-img"
                className="img-fluid" // Makes Image change with div
                style={{ maxWidth: '100%', height: 'auto' }} // Adjust size if needed
              />
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className="p-1 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'transparent' }}>
              <img
                src="https://www.irishtimes.com/resizer/3KNQ47rgLHz-sHCd5d_7tRqMjOo=/arc-photo-irishtimes/eu-central-1-prod/public/GI7BDVKOBFEGBI6ZSA4IOLRQM4.jpg"
                alt="knitting-img"
                className="img-fluid" // Makes Image change with div
                style={{ maxWidth: '100%', height: 'auto' }} // Adjust size if needed
              />
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className="p-1 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'transparent' }}>
              <img
                src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/tasty_gyoza_japanese_16947_16x9.jpg"
                alt="dumplings-img"
                className="img-fluid" // Makes Image change with div
                style={{ maxWidth: '100%', height: 'auto' }} // Adjust size if needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;