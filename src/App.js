import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import PdfViewerComponent from "./pdfViewer";
import PdfViewer from "./pdfJsViewer";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function App() {
  const documentUrl = "https://cdn.visionias.in/misc/c610ysw70901694414484.pdf";

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdfViewer" element={<PdfViewerComponent document={documentUrl} documentType='pdf' />} />
          <Route path="/pdfjsViewer" element={<PdfViewer fileName={documentUrl} />} />

        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
        <a href="/pdfViewer" target="_blank">View pdf</a>
        <div style={{marginTop: '15px'}}>
        <a href="/pdfjsViewer" target="_blank">View JS pdf</a>
        </div>
    </div>
  );
}

export default App;
