import React from "react";
import { FaPlay, FaHeart, FaEllipsisH } from "react-icons/fa";
import "./Playlist.css";

const PlaylistPage = () => {
    const playlist = {
        title: "In Utero (30th Anniversary Super Deluxe)",
        creator: "Nirvana",
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
        <div className="playlist-container">
            <div className="playlist-header">
                <img src={playlist.image} alt={playlist.title} className="playlist-image" />
                <div className="playlist-info">
                    <h1 className="playlist-title">{playlist.title}</h1>
                    <p className="playlist-creator">Created by {playlist.creator}</p>
                    <button className="listen-button">
                        <FaPlay /> Play
                    </button>
                </div>
            </div>
            <div className="tracklist">
                <h2 className="tracklist-title">Tracks</h2>
                <ul className="tracklist-items">
                    {playlist.tracks.map((track, index) => (
                        <li key={index} className="track">
                            <span className="track-name">{track}</span>
                            <div className="track-icons">
                                <FaHeart className="icon" />
                                <FaEllipsisH className="icon" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlaylistPage;
