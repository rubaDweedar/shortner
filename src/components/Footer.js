import React from 'react';
import '../styles/Footer.css';

const actions = [
    {title: "Features", actions: [{name: 'Link Shortening'}, {name: 'Branded Links'}, {name: 'Analytics'}]},
    {title: "Resources", actions: [{name: 'Blog'}, {name: 'Developer'}, {name: 'Support'}]},
    {title: "Company", actions: [{name: 'About'}, {name: 'Our Team'}, {name: 'Careers'}, {name:'Contact'}]},
]

const icons = [{name: 'facebook'}, {name: 'twitter'}, {name: 'pinterest'}, {name: 'instagram'}]

const Footer = () => {
    return (
        <footer className='dark-violet-bg padding-right-common padding-left-common footer'>
            <div className='icon-container'>
                <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Logo" className='logo-image' />
            </div>
            {
                actions.map((item, i) => (
                    <div key={i} className='actions-container'>
                        <div className='action-header white-text'>
                            {item.title}
                        </div>
                        {
                            item.actions.map((action, n) => (
                                <div key={n} className='action-item grayish-violet-text primary-hover'>{action.name}</div>
                            ))
                        }
                    </div>                   
                ))
            }
            <div className='social-links'>
                {
                    icons.map((icon, i) => (
                        <img key={i} className='social-link' src={`/images/icon-${icon.name}.svg`} alt={icon.name}/>
                    ))
                }
            </div>
        </footer>
    );
};

export default Footer;
