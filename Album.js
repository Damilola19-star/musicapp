import React, { useState } from "react";
import { FaPlay, FaHeart, FaEllipsisH } from "react-icons/fa";
import "./Album.css";

const AlbumPage = ({ 
  title = "In Utero (30th Anniversary Super Deluxe)", 
  artist = "Nirvana", 
  year = "2023", 
  totalSongs = 72, 
  duration = "3 hr 21 min", 
  coverImage = "https://via.placeholder.com/150", 
  tracks = []  // ✅ Default value for tracks to prevent undefined error
}) => {
  const [likedTracks, setLikedTracks] = useState({});

  const toggleLike = (index) => {
    setLikedTracks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="album-container">
      <div className="album-header">
        <img className="album-image" src={coverImage} alt="Album Cover" />
        <div>
          <h1>{title}</h1>
          <p>{artist} • {year} • {totalSongs} songs • {duration}</p>
          <button className="listen-button"><FaPlay /> Listen</button>
        </div>
      </div>

      <div className="tracklist">
        <h2>Tracks</h2>
        <ul>
          {tracks?.map((track, index) => (  // ✅ Safe usage with optional chaining
            <li key={index} className="track">
              <span>{index + 1}. {track}</span>
              <div className="track-icons">
                <FaPlay className="icon" />
                <FaHeart
                  className={`icon ${likedTracks[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                />
                <FaEllipsisH className="icon" />
              </div>
            </li>
          )) || <p>No tracks available</p>}  {/* ✅ Fallback message if tracks is empty */}
        </ul>
      </div>
    </div>
  );
};

export default AlbumPage;
