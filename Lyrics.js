import React from "react";
import { FaPlay, FaForward, FaBackward } from "react-icons/fa";
import "./Lyrics.css";

const LyricsPage = () => {
  return (
    <div className="lyrics-container">
      <div className="album-art">
        <img src="https://via.placeholder.com/200" alt="Album Cover" />
      </div>
      <div className="lyrics-text">
        <p className="fade">It doesn't even matter how hard you try</p>
        <p>Keep that in mind</p>
        <p>I designed this rhyme</p>
        <p>To remind myself how</p>
        <p>I tried so hard</p>
        <p className="highlight">In spite of the way you were mocking me</p>
        <p>Acting like I was part of your property</p>
        <p>Remembering all the times you fought with me</p>
        <p>I'm surprised it got so far</p>
        <p className="fade">Things aren't the way they were before</p>
      </div>
      <div className="player">
        <FaBackward className="player-icon" />
        <FaPlay className="player-icon play" />
        <FaForward className="player-icon" />
      </div>
    </div>
  );
};

export default LyricsPage;



