import React from 'react';
import '../styles/Main.css';
import ShortenLinkSection from './ShortenLinkSection.js';

function MainSection() {
  return (
    <main>
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
      <ShortenLinkSection />
    </main>
  );
}

export default MainSection;
