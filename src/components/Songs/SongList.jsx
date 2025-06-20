// List of Song that lil dream promise to destroy the world 
// Offering to the unkown angel of desstruction, that also kept its promise

function SongsList() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">🎵 Song Library</h2>

      <div className="space-y-2">
        <a href="/songs/red" className="block bg-red-800 p-4 rounded hover:bg-red-700 transition">🔴 RED</a>
        <a href="/songs/dream" className="block bg-blue-800 p-4 rounded hover:bg-blue-700 transition">💭 Dream</a>
        <a href="/songs/betterbomb" className="block bg-yellow-700 p-4 rounded hover:bg-yellow-600 transition">💣 Better Bomb</a>
      </div>
    </div>
  );
}

export default SongsList;