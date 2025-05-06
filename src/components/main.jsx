import React from 'react';
import '../style/main.css';
import avatar from '../assets/avata.jpeg';
const Main = () => {
    return (
        <main className="main">
      <div className="main-left">
        <p className="intro">Hello, I'm</p>
        <h1 className="name">NGUYỄN MINH TRUNG</h1>
        <h2 className="role">FRONT-END INTERN</h2>
        <p className="description">Welcome to my personal website</p>
      </div>
      <div className="main-right">
        <img src={avatar} alt="big avatar" />
      </div>
    </main>
    );
};
export default Main;