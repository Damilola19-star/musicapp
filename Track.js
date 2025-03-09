// import React from "react";
// import { FaPlay, FaHeart, FaEllipsisH } from "react-icons/fa";
// import "./Track.css";

// const Track= () => {
//   const album = {
//     title: "In Utero (30th Anniversary Super Deluxe)",
//     artist: "Nirvana",
//     image: "https://via.placeholder.com/150", 
//     tracks: [
//       "Serve The Servants (2023 Remastered)",
//       "Scentless Apprentice (2023 Remastered)",
//       "Heart-Shaped Box (2023 Remastered)",
//       "Rape Me (2023 Remastered)",
//       "Frances Farmer Will Have Her Revenge on Seattle (2023 Remastered)",
//       "Dumb (2023 Remastered)",
//       "Very Ape (2023 Remastered)",
//       "Milk It (2023 Remastered)"
//     ]
//   };

//   return (
//     <div className="album-container">
//       <div className="album-header">
//         <img src={album.image} alt={album.title} className="album-image" />
//         <div className="album-info">
//           <h1 className="album-title">{album.title}</h1>
//           <p className="album-artist">{album.artist}</p>
//           <button className="listen-button">
//             <FaPlay /> Listen
//           </button>
//         </div>
//       </div>
//       <div className="tracklist">
//         <h2 className="tracklist-title">Tracklist</h2>
//         <ul className="tracklist-items">
//           {album.tracks.map((track, index) => (
//             <li key={index} className="track">
//               <span className="track-name">{track}</span>
//               <div className="track-icons">
//                 <FaHeart className="icon" />
//                 <FaEllipsisH className="icon" />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Track;




import React, { useState } from "react";
import { FaPlay, FaHeart, FaEllipsisH } from "react-icons/fa";
import "./Track.css";

// Track Component
const Track = ({ album }) => {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite status
  const toggleFavorite = (track) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(track)
        ? prevFavorites.filter((fav) => fav !== track)
        : [...prevFavorites, track]
    );
  };

  return (
    <div className="album-container">
      <div className="album-header">
        <img src={album.image} alt={album.title} className="album-image" />
        <div className="album-info">
          <h1 className="album-title">{album.title}</h1>
          <p className="album-artist">{album.artist}</p>
          <button className="listen-button">
            <FaPlay /> Listen
          </button>
        </div>
      </div>
      <div className="tracklist">
        <h2 className="tracklist-title">Tracklist</h2>
        <ul className="tracklist-items">
          {album.tracks.map((track, index) => (
            <li key={index} className="track">
              <span className="track-name">{track}</span>
              <div className="track-icons">
                <FaHeart
                  className={`icon ${favorites.includes(track) ? "favorite" : ""}`}
                  onClick={() => toggleFavorite(track)}
                />
                <FaEllipsisH className="icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const albumData = {
    title: "In Utero (30th Anniversary Super Deluxe)",
    artist: "Nirvana",
    image: "https://via.placeholder.com/150",
    tracks: [
      "Serve The Servants (2023 Remastered)",
      "Scentless Apprentice (2023 Remastered)",
      "Heart-Shaped Box (2023 Remastered)",
      "Rape Me (2023 Remastered)",
      "Frances Farmer Will Have Her Revenge on Seattle (2023 Remastered)",
      "Dumb (2023 Remastered)",
      "Very Ape (2023 Remastered)",
      "Milk It (2023 Remastered)"
    ]
  };

  return (
    <div>
      <Track album={albumData} />
    </div>
  );
};

export default App;
