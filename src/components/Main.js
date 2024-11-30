import React from 'react';
import ShortenLinkSection from './ShortenLinkSection.js';
import GetStarted from './GetStarted.js';
import AdvancedStatistics from './AdvancedStatistics.js';
import Boost from './Boost.js';

function MainSection() {
  return (
    <main>
      <GetStarted />
      <ShortenLinkSection />
      <AdvancedStatistics />
      <Boost />
    </main>
  );
}

export default MainSection;
