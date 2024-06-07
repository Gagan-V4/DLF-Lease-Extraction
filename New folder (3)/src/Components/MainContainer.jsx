import React from "react";
import { useState } from "react";
// import '../Components/func.js'

import "./MainContainer.css";

const MainContainer = () => {

  
  const [pdfFile, setPdfFile] = useState(null);
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPdfFile(URL.createObjectURL(file));
     
    }
   
  };
  


  return (
    <div>
      <div className="container">
        <h1>Document Extractor</h1>
        <select id="select-document">
          <option value="">Select Document</option>
          <option value="pay-slip">Pay Slip</option>
          <option value="bank-invoice">Bank Invoice</option>
          <option value="receipt">Receipt</option>
          <option value="loan-details">Loan Details</option>
        </select>
        {/* <input id="btn-select" type="file" accept='.pdf'  /> */}
        <button id="btn-select">
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </button>
        <button id="btn-extract" disabled>
          Extract Document
        </button>
        <div id="extractor-box">
          <div id="result"></div>
         
          { 
          (  pdfFile) ? "":<img className="document-image" src="" alt="Document Image" />}
          {pdfFile && (
            <div>
              <embed
                src={pdfFile}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
          )}
        </div>
        <div id="error-text"></div>
        <button id="btn-fix-error" style={{ display: "none" }}>
          Fix Error
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
