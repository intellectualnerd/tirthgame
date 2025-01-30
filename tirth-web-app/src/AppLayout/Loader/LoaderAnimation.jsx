
import React, { useEffect } from 'react';
import './LoaderAnimation.css';
import { tailspin } from 'ldrs';
const LoaderAnimation = () => {
    useEffect(() => {
        tailspin.register()
        // Register the l-cardio component
    }, []);
    return (
      <>
        <div className="body">
          <l-tailspin
            size="60"
            
            bg-opacity="0.1"
            speed="3"
            stroke="6"
            color="#9D0109"
          ></l-tailspin>
        </div>
      </>
    );
};



export default LoaderAnimation;
