import "./style.css";
import { Link } from "react-router-dom"

import React, { useState, useRef, MutableRefObject } from 'react';
import Webcam from 'react-webcam';

function BiometriaFacial() {
  const webcamRef: MutableRefObject<any> = useRef(null); // Use any if you're unsure of the type

  const [isWebcamOn, setIsWebcamOn] = useState(false);

  const startWebcam = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (webcamRef.current) {
          (webcamRef.current as any).srcObject = stream; // Use 'as any' to avoid TypeScript error
          setIsWebcamOn(true);
        }
      })
      .catch((error) => {
        console.error('Error accessing webcam:', error);
      });
  };

  const stopWebcam = () => {
    if (webcamRef.current) {
      const tracks = (webcamRef.current as any).srcObject.getTracks(); // Use 'as any' here
      tracks.forEach((track: any) => track.stop()); // Use 'as any' here
      setIsWebcamOn(false);
    }
  };

  return (
    <div>
      <h1>Webcam Component</h1>
      <Webcam ref={webcamRef} />
      {isWebcamOn ? (
        <button onClick={stopWebcam}>Stop Webcam</button>
      ) : (
        <button onClick={startWebcam}>Start Webcam</button>
      )}
    </div>
  );
}

export default BiometriaFacial;
