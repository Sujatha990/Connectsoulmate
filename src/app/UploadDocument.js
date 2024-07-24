import React from 'react';
import './uploaddocument.css'; // Import CSS file


const UploadDocument = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Upload Document</h2>
              <form action="#" method="POST" encType="multipart/form-data">
                <div className="form-group text-center">
                  <label htmlFor="document" className="text-left d-block">Choose file:</label>
                  <div className="text-left mx-auto" style={{ maxWidth: "300px" }}>
                    <input type="file" className="form-control-file" id="document" name="document" />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mt-3">Upload</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocument;
