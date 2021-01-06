import React, { Component } from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from './CV.pdf';

class Cv extends Component {
render(){
    return (
        <div>
        <Worker style={{
            zoom: '100%',
        }} workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
       <div id="pdfviewer">
         {/* Internal pdf file load */}
            <Viewer  fileUrl={filePDF}/>
         {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
       </div>
   </Worker>
       </div>
      )
    }
}

export default Cv;