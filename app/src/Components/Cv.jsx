import React, { Component } from "react";
// import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
// import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import filePDF from "./CV.pdf";

class Cv extends Component {
  render() {
    return (
      <div>
        {/* <Worker style={{
            zoom: '100%',
        }} workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
       <div id="pdfviewer">
            <Viewer  fileUrl={filePDF}/>
       </div>
      </Worker> */}
      </div>
    );
  }
}

export default Cv;
