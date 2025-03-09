
import React from 'react';
import AlbumPage from './Album';
import PlaylistPage from './Playlist';
import Track from './Track';
import LyricsPage from './Lyrics';
import Artist from './Artist';
import MySearchPage from './SearchPage';
import UserList from './Display';
import ExplorePage from './Explorepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <nav>

        </nav>
        <Routes>
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/track" element={<Track />} />
          <Route path="/lyrics" element={<LyricsPage />} />
          <Route path="/search" element={<MySearchPage />} />
          <Route path="/page" element={<ExplorePage />} />
          <Route path="/safe" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;