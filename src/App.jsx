import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { faMusic, faMicrophone, faVideo, faCamera, faRoad } from '@fortawesome/free-solid-svg-icons';

// Components
import Timeline from './components/Timeline/Timeline';
import Sidebar from './components/Sidebar';
import DreamPanel from './components/DreamPanel/DreamPanel';

// Placeholder components (replace later with real ones)
import SongsList from './components/Songs/SongList';
const Karaokes = () => <div>🎤 Karaokes List</div>;
const Clips = () => <div>🎬 Video Clips</div>;
const Photos = () => <div>📸 Photos Gallery</div>;

function App() {
  const isMobile = window.innerWidth < 768;
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  return (
    <div className="flex flex-row min-h-screen text-white">
      {/* Mobile hamburger */}
      <span
        title="Toggle Menu"
        onClick={() => setMobileSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 text-xl cursor-pointer p-2 rounded bg-gray-900 md:hidden"
      >
        🍔
      </span>

      {/* Sidebar */}
      <Sidebar
        isMobile={isMobile}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        desktopSidebarOpen={desktopSidebarOpen}
        setDesktopSidebarOpen={setDesktopSidebarOpen}
      />

      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center text-center p-6">
        <h1 className="font-bold text-3xl mb-6">Lil Dream Timeline</h1>

        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/songs" element={<SongsList />} />
          <Route path="/karaokes" element={<Karaokes />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </main>

      {/* Right panel */}
      <DreamPanel />
    </div>
  );
}

export default App;
