import React from "react";
import { FaPlay, FaForward, FaBackward, FaSearch } from "react-icons/fa";
import "./SearchPage.css";

const MySearchPage = () => (
  <div className="sidebar">
    <h2 className="title">Deezer</h2>
    <ul>
      {["Home", "Explore", "Favorites", "Downloads"].map((item) => (
        <li key={item} className="menu-item">{item}</li>
      ))}
    </ul>
    <h3 className="playlist-title">Playlists</h3>
    <ul>
      {["My Top 2023", "Discovery 2024", "Daily Mix", "Chill Vibes"].map((item) => (
        <li key={item} className="menu-item">{item}</li>
      ))}
    </ul>
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <FaSearch className="search-icon" />
    <input type="text" placeholder="Search artists, tracks, podcasts..." className="search-input" />
  </div>
);

const Banner = () => (
  <div className="banner-section">
    <div className="banner">
      <img src="https://via.placeholder.com/300x150" alt="Year in Music" />
    </div>
    <div className="banner">
      <img src="https://via.placeholder.com/300x150" alt="Year in Music" />
    </div>
  </div>
);

const FlowSection = () => {
  const moods = ["Flow", "Christmas", "Rock", "Metal", "Pop", "Classical", "Jazz", "Vocal"];
  return (
    <div className="flow-section">
      <h2 className="section-title">Flow: Play how you feel</h2>
      <div className="flow-buttons">
        {moods.map((mood, index) => (
          <button key={index} className="flow-button">{mood}</button>
        ))}
      </div>
    </div>
  );
};

const Card = ({ image, title }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <h3 className="card-title">{title}</h3>
  </div>
);

const Playlists = () => {
  const playlists = [
    { image: "https://via.placeholder.com/150", title: "My Top 2023" },
    { image: "https://via.placeholder.com/150", title: "Discovery 2024" },
    { image: "https://via.placeholder.com/150", title: "Daily Mix" },
    { image: "https://via.placeholder.com/150", title: "Chill Vibes" },
  ];
  return (
    <div className="playlists">
      <h2 className="section-title">Made for you</h2>
      <div className="grid-container">
        {playlists.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

const Player = () => (
  <div className="player">
    <FaBackward className="player-icon" />
    <FaPlay className="player-icon play" />
    <FaForward className="player-icon" />
  </div>
);

const SearchPage = () => {
  return (
    <div className="container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <SearchBar />
        <Banner />
        <FlowSection />
        <Playlists />
      </div>
      <Player />
    </div>
  );
};

export default MySearchPage;
