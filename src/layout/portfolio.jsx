import React from 'react';
import '../style/portfolio.css'; 
import portfolio from '../assets/portfolio-1.jpg';
import clinic from '../assets/clinic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import{faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';



const projects = [
    {
        title: "Personal website",
        description: "My personal website, I create this website to display my profile, skills and project. As well as my place to try new technology.",
        tech: "React, Bootstrap 4",
        github: "https://github.com/trung761/Portfolio",
        link: "https://trung761.github.io/Portfolio/"
    },
];
const projects2 = [
    {
        title: "Clinic website",
        description: "System for managing patient tests: register, assign, test, and deliver results.",
        tech: "Laravel, JS, Bootstrap 4",
        github: "https://github.com/trung761/Clinic",
        link: "https://github.com/trung761/Clinic"
    },
];
const projects3 = [
    {
        title: "Educational News & Admission Blog",
        description: "Blog-style website for posting educational and university admission news and updates.",
        tech: "Laravel, JS, Bootstrap 4",
        github: "https://github.com/trung761/Web_pdt",
        link: "https://github.com/trung761/Web_pdt"
    },
    
];

const PortfolioLayout = () => {
    return (
        <div className="portfolio-container">
            <h2 className="portfolio-title">Past Project Experience</h2>
            <p className="portfolio-subtitle">Explore the project I've worked on so far</p>
            <div className="portfolio-flex">
                <div className="portfolio-grid">
                    {/* truyền project vào */}
                    {projects.map((project, index) => (
                        <div className="portfolio-card" key={index}>
                            {/* hình project */}
                            <div className="img" style={{borderRadius: '10px'}}>
                                <img src={portfolio} alt={project.title} className="portfolio-image" style={{borderRadius: '10px'}} />
                            </div>     
                             {/* Nơi chứa content */}
                            <div className="portfolio-content">
                                {/* tiêu đề và mô tả sơ bộ */}
                                <div className="title">
                                    <h3>{project.title}</h3>
                                </div>
                                
                                <div className="description">
                                    <p>{project.description}</p>
                                </div>
                                

                                {/* nơi chứa tech + link git && link web */}
                                <div className="row">
                                    {/* tech */}
                                    <div className="tech">
                                        <p className="portfolio-tech">{project.tech}</p>
                                    </div>

                                    {/* icon chứa link */}
                                    <div className="icon">
                                        {/* github */}
                                        <a href={project.github}  className="portfolio-icon github">
                                            <svg height="20" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="20" data-view-component="true" >
                                                <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                                            </svg>   
                                        </a>
                                        {/* links website */}
                                        <a href={project.link}   className="portfolio-icon links">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
                                        </a>
                                    </div>                           
                                </div>                              
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {/* truyền project vào */}
                    {projects2.map((project, index) => (
                        <div className="portfolio-card" key={index}>
                            {/* hình project */}
                            <div className="img" style={{ borderRadius: '10px'}}>
                                <img src={clinic} alt={project.title} className="portfolio-image" style={{borderRadius: '10px'}} />
                            </div>     
                             {/* Nơi chứa content */}
                            <div className="portfolio-content">
                                {/* tiêu đề và mô tả sơ bộ */}
                                <div className="title">
                                    <h3>{project.title}</h3>
                                </div>
                                
                                <div className="description">
                                    <p>{project.description}</p>
                                </div>

                                {/* nơi chứa tech + link git && link web */}
                                <div className="row">
                                    {/* tech */}
                                    <div className="tech">
                                        <p className="portfolio-tech">{project.tech}</p>
                                    </div>

                                    {/* icon chứa link */}
                                    <div className="icon">
                                        {/* github */}
                                        <a href={project.github}  className="portfolio-icon github">
                                            <svg height="20" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="20" data-view-component="true" >
                                                <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                                            </svg>   
                                        </a>
                                        {/* links website */}
                                        <a href={project.link}   className="portfolio-icon links">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
                                        </a>
                                    </div>                           
                                </div>                              
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-grid">
                    {/* truyền project vào */}
                    {projects3.map((project, index) => (
                        <div className="portfolio-card" key={index}>
                            {/* hình project */}
                            <div className="img" style={{borderRadius: '10px'}}>
                                <img src={portfolio} alt={project.title} className="portfolio-image" style={{borderRadius: '10px'}} />
                            </div>     
                             {/* Nơi chứa content */}
                            <div className="portfolio-content">
                                {/* tiêu đề và mô tả sơ bộ */}
                                <div className="title">
                                    <h3>{project.title}</h3>
                                </div>
                                
                                <div className="description">
                                    <p>{project.description}</p>
                                </div>

                                {/* nơi chứa tech + link git && link web */}
                                <div className="row">
                                    {/* tech */}
                                    <div className="tech">
                                        <p className="portfolio-tech">{project.tech}</p>
                                    </div>

                                    {/* icon chứa link */}
                                    <div className="icon">
                                        {/* github */}
                                        <a href={project.github}  className="portfolio-icon github">
                                            <svg height="20" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="20" data-view-component="true" >
                                                <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
                                            </svg>   
                                        </a>
                                        {/* links website */}
                                        <a href={project.link}   className="portfolio-icon links">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
                                        </a>
                                    </div>                           
                                </div>                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default PortfolioLayout;
