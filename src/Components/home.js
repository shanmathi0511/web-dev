import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('Home');

  const renderContent = () => {
    switch (selectedOption) {
      case 'Home':
        return <div>Welcome to the Home page!</div>;
      case 'Explore':
        return <div>Explore new content here!</div>;
      case 'Notifications':
        return <div>Here are your notifications.</div>;
      case 'Messages':
        return <div>Check your messages here.</div>;
      case 'Bookmarks':
        return <div>These are your bookmarks.</div>;
      case 'Lists':
        return <div>Your lists are displayed here.</div>;
      case 'Profile':
        return <div>This is your profile page.</div>;
      case 'More':
        return <div>Find more options here.</div>;
      default:
        return <div>Welcome to the Home page!</div>;
    }
  };

  return (
    <div className="home">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li onClick={() => setSelectedOption('Home')}>
            <i className="fas fa-home"></i> Home
          </li>
          <li onClick={() => setSelectedOption('Explore')}>
            <i className="fas fa-hashtag"></i> Explore
          </li>
          <li onClick={() => setSelectedOption('Notifications')}>
            <i className="fas fa-bell"></i> Notifications
          </li>
          <li onClick={() => setSelectedOption('Messages')}>
            <i className="fas fa-envelope"></i> Messages
          </li>
          <li onClick={() => setSelectedOption('Bookmarks')}>
            <i className="fas fa-bookmark"></i> Bookmarks
          </li>
          <li onClick={() => setSelectedOption('Lists')}>
            <i className="fas fa-list"></i> Lists
          </li>
          <li onClick={() => setSelectedOption('Profile')}>
            <i className="fas fa-user"></i> Profile
          </li>
          <li onClick={() => setSelectedOption('More')}>
            <i className="fas fa-ellipsis-h"></i> More
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h2>{selectedOption}</h2>
        {renderContent()}
      </div>
      <div className="extra-content">
        <h2>Extra Content</h2>
        <div className="trends">
          <h3>Trends for you</h3>
          <ul>
            <li>#Trend1</li>
            <li>#Trend2</li>
            <li>#Trend3</li>
          </ul>
        </div>
        <div className="who-to-follow">
          <h3>Who to follow</h3>
          <ul>
            <li>User1</li>
            <li>User2</li>
            <li>User3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
