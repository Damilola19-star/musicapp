
import React from "react";
import { FaPlay, FaForward, FaBackward } from "react-icons/fa";
import "./Style.css";


const Sidebar = () => (
    <div className="sidebar">
        <h2 className="title">Deezer</h2>
        <ul>
            {['Music', 'Shows', 'Browse', 'Favorites'].map((item) => (
                <li key={item} className="menu-item">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Card = ({ image, title }) => (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
    </div>
);

const MainContent = () => {
    const playlists = [
        { image: "https://i.postimg.cc/44p90HyN/davido.jpg", title: "Feel Good" },
        { image: "https://i.postimg.cc/ZqCS9N28/celine-dion-png.png", title: "Coffee" },
        { image: "https://i.postimg.cc/jSYcnY1Z/burnaboy.png", title: "Chill" },
        { image: "https://i.postimg.cc/1tcXBTc0/Rema.jpg", title: "Good Vibes" },
        { image: "https://i.postimg.cc/MpVnXvMr/image.jpg", title: "Soul to Chill" },
    ];
    return (
        <div className="main-content">
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

const ExplorePage = () => {
    return (
        <div className="container">
            <Sidebar />
            <MainContent />
            <Player />
        </div>
    );
};

export default ExplorePage;

