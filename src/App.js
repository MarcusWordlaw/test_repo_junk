import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import SinglePagePDFViewer from "./components/pdf/single-page";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";
import smPDFM from "./smpM.pdf";
import smPDFB from "./smpB.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>RT-PCR</h4>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SinglePagePDFViewer pdf={samplePDF} />} />
        <Route path="/TEdNMTMzMzhTTEkqQ0UzUDNFM01HTlNMSSpDRTExLTEyLTIwMjEgMTg6MTA6MTB" element={<SinglePagePDFViewer pdf={smPDFB} />} />
        <Route path="/TEdNMTMzMzhTTEkqQ0UzUDNFM01HTlNMSSpDRTExLTEyLTIwMjEgMTg6MTA6MTM" element={<SinglePagePDFViewer pdf={smPDFM} />} />
        </Routes>
      </BrowserRouter>
      <hr />
    </div>
  );
}


// Utentes/Home/ObterProcesso?key=TEdNMTMzMzhTTEkqQ0UzUDNFM01HTlNMSSpDRTExLTEyLTIwMjEgMTg6MTA6MTB