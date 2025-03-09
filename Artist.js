import React, { useState } from "react";
import { FaPlay, FaHeart, FaPlus, FaEllipsisH } from "react-icons/fa";
import "./Artist.css";

const ArtistPage = ({ 
  artist = "Linkin Park", 
  year = "2024", 
  latestRelease = "Lost (PLZ Tethered Version)", 
  topTracks = [], // ✅ Default value to prevent undefined error
  image = "https://via.placeholder.com/150"
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <div className="artist-container">
      <div className="artist-header">
        <img className="artist-image" src={image} alt={artist} />
        <h1>{artist}</h1>
        <button className={`follow-button ${isFollowing ? "following" : ""}`} onClick={toggleFollow}>
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div className="tabs">
        {["Discography", "Top tracks", "Similar artists", "Playlists", "Bio"].map((tab, index) => (
          <span key={index} className="tab">{tab}</span>
        ))}
      </div>

      <div className="top-tracks">
        <h2>Top Tracks</h2>
        <ul>
          {topTracks.length > 0 ? (
            topTracks.map((track, index) => ( // ✅ Safe usage of topTracks with default value
              <li key={index} className="track">
                <span>{track}</span>
                <div className="track-icons">
                  <FaPlay className="icon" />
                  <FaHeart className="icon" />
                  <FaPlus className="icon" />
                </div>
              </li>
            ))
          ) : (
            <p>No top tracks available</p> // ✅ Fallback when topTracks is empty
          )}
        </ul>
      </div>

      <div className="latest-release">
        <h2>Latest Release</h2>
        <div className="release-card">
          <img src="https://via.placeholder.com/100" alt="Album Cover" />
          <div>
            <h3>{latestRelease}</h3>
            <p>{artist} • {year}</p>
          </div>
          <FaEllipsisH className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
