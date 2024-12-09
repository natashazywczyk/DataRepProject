import React from 'react';

const Ideas = () => {
  return (
    <div>
        {/*Add potential ideas for user to add*/}
        <h1>Ideas!</h1>

        <div className="container mt-5">
          <div className="row mb-3">
            {/* Row 1 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
          </div>

          <div className="row mb-3">
            {/* Row 2 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
          </div>

          <div className="row mb-3">
            {/* Row 3 */}
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Picture</div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border" style={{ backgroundColor: 'transparent' }}>Description</div>
            </div>
          </div>

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