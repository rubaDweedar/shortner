import React, { useState, useEffect } from 'react';
import '../styles/ShortenLinkSection.css';

function ShortenLinkSection() {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('shortenedLinks')) || [
      {original: "https://github.com/hassan-alnator/", shortened: "https://github.com/", copied: false},
      {original: "https://github.com/Aseel-Dweedar/shortening/blob/main/src/components/Home/SearchSection/SearchSection.scss", shortened: "https://github.com/Aseel-", copied: true}
    ];

    setLinks(storedLinks);
  }, []);

  const handleShorten = async () => {
    if (link.trim() === '') {
      setError('Please add a link');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.pxl.to/api/v1/short', {
        method: "POST",
        body: {
            destination: link
        }
      });
      const data = await response.json();

      if (data.ok) {
        const shortenedLink = data.result.full_short_link;
        const newLink = { original: link, shortened: shortenedLink };
        const updatedLinks = [...links, newLink];
        setLinks(updatedLinks);
        localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
        setLink('');
      } else {
        setError('Failed to shorten the link');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (shortenedLink, index) => {
    navigator.clipboard.writeText(shortenedLink);
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], copied: true };
    setLinks(updatedLinks);
  };

  return (
    <section className='margin-top-70'>
        <div className='padding-right-common padding-left-common custom-background'>
          <div className="shorten-link-section violet-bg">
            <div className="input-container">
              <input
                type="url"
                placeholder="shorten a link here ..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className={`link-input ${error ? 'error' : ''}`}
              />
              {error && <p className="error-message secondary-text">{error}</p>}
            </div>
            <button onClick={handleShorten} className="shorten-button primary-bg" disabled={isLoading}>{isLoading ? 'Shortening...' : 'Shorten it!'}</button>
          </div>
        </div>
        <div className='padding-right-common padding-left-common gray-bg'>
          <div className="linksContainer">
            {links.map((link, index) => (
              <div key={index} className="card">
                  <div className='originalLink'>{link.original}</div>
                  <div className='shortenedLinkContainer'>
                    <span className="shortenedLink">{link.shortened}</span>
                    <button
                      className={(link.copied ? 'violet-bg' : 'primary-bg') + " copyButton"}
                      onClick={() => handleCopy(link.shortened, index)}
                    >
                    {link.copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

export default ShortenLinkSection;
