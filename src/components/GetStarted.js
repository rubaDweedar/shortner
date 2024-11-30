import React from 'react';
import '../styles/GetStarted.css';

function GetStarted() {
    return (
        <div className="main padding-left-common">
            <div className="leftSection">
                <h1 className="largeText dark-blue-text">More than just shorter links</h1>
                <p className="fadedText grayish-violet-text">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className="light-blue-button font-size-large">Get Started</button>
            </div>
            <div className="rightSection">
                <img 
                    src={process.env.PUBLIC_URL + '/images/illustration-working.svg'} 
                    alt="Illustration" 
                    className="image" 
                />
            </div>
        </div>
    );
}
  
export default GetStarted;