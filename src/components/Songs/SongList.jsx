// List of Song that lil dream promise to destroy the world 
// Offering to the unkown angel of desstruction, that also kept its promise

function SongsList() {
  return (
    <div className="space-y-6 px-4 max-w-6xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">🎶 Lil Dream’s Song Library</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">

        {/* RED */}
        <a
          href="/songs/red"
          className="group block bg-purple-900 p-6 rounded-xl hover:bg-purple-800 transition shadow-lg relative overflow-hidden border-2 border-purple-500 hover:border-red-600"
          style={{
            boxShadow: "0 0 15px 4px rgba(128, 0, 128, 0.5)",
          }}
        >
          {/* Bleeding edge overlay */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600 rounded-full blur-md opacity-70 animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-600 rounded-full blur-md opacity-70 animate-ping"></div>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition relative z-10">🔴 RED</h3>
          <p className="text-sm opacity-80 relative z-10">
            The first offering — drenched in sin and crimson lights.
          </p>
        </a>


        {/* DREAM - untouched */}
        <a
          href="/songs/dream"
          className="group block bg-blue-900 p-6 rounded-xl hover:bg-blue-700 transition shadow-lg relative overflow-hidden"
          style={{
            backgroundImage: "url('/fly_over_the_moon.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="ghost-title">DREAM</span>
          <div className="backdrop-blur-sm backdrop-brightness-50 p-4 rounded">
            <p className="text-sm text-gray-300 italic opacity-90 group-hover:opacity-100 transition">
              You get the so called nightmare right? Everything is...
            </p>
          </div>
        </a>

        {/* Better Bomb */}
        <a href="/songs/betterbomb" className="group block bg-yellow-800 p-6 rounded-xl hover:bg-yellow-600 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">💣 Better Bomb</h3>
          <p className="text-sm opacity-80">Ticking down to oblivion — one detonation away.</p>
        </a>

        {/* Grit */}
        <a href="/songs/grit" className="group block bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">⚒️ GRIT</h3>
          <p className="text-sm opacity-80">Determination never dies — stone cold resolve.</p>
        </a>

        {/* Easy */}
        <a href="/songs/easy" className="group block bg-green-800 p-6 rounded-xl hover:bg-green-700 transition shadow-lg">
          <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">🌿 EASY</h3>
          <p className="text-sm opacity-80">Some paths whisper ease — but every shortcut has a cost.</p>
        </a>

      </div>
    </div>
  );
}

export default SongsList;


