import React from 'react';
import '../styles/AdvancedStatistics.css';

const cards = [
    {
        src: '/images/icon-brand-recognition.svg',
        title:'Brand Recognition',
        description:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
        align: 'start',
    },
    {
        src: '/images/icon-detailed-records.svg',
        title:'Detailed Records',
        description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        align: 'center',
    },
    {
        src: '/images/icon-fully-customizable.svg',
        title:'Fully Customizable',
        description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        align: 'end',
    },
]


function AdvancedStatistics() {
  return (
    <div className='padding-left-common padding-right-common gray-bg advanced-statistics-container padding-top-common padding-bottom-common'>
        <div className='statistics-header'>
            <div className='dark-violet-text statistics-title font-weight-bold'>Advanced Statistics</div>
            <p className='grayish-violet-text'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className='cards-container'>
            <div className='horizontal-line'></div>
            {
                cards.map((item, i) => (
                    <div key={i} className={`card-container white-bg self-${item.align}`}>
                        <div className='img-wrapper violet-bg'>
                            <img src={item.src} alt='static'/>
                        </div>
                        <h4 className='dark-violet-text'>{item.title}</h4>
                        <p className='main-gray-text'>{item.description}</p>
                    </div>                   
                ))
            }
        </div>
    </div>
  );
}

export default AdvancedStatistics;
