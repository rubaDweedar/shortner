import React from 'react';
import '../styles/GetStarted.css';

function GetStarted() {
    return (
        <div className="main padding-left-common padding-top-common">
            <div className="left-section">
                <h1 className="large-text dark-blue-text">More than just shorter links</h1>
                <p className="faded-text grayish-violet-text">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className="light-blue-button font-size-large font-weight-medium hover-for-primary">Get Started</button>
            </div>
            <div className="right-section">
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