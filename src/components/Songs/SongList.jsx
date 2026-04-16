// List of Song that lil dream promise to destroy the world 
// Offering to the unkown angel of desstruction, that also kept its promise

import { Link } from "react-router-dom";

function SongsList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10 space-y-6 pb-10">
      <h1 className="text-4xl font-bold text-center">🎶 Lil Dream’s Song Library</h1>

      {/* Responsive grid: 1 / 2 / 3 columns */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

        {/* RED */}
        <Link
          to="/songs/red"
          className="group relative block overflow-hidden rounded-xl border-2 border-purple-500 bg-purple-900 shadow-lg transition hover:border-red-600"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/red_entrance_horizontal.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">🔴 RED</h3>
            <p className="text-sm opacity-90">
              The first offering — drenched in sin and crimson lights.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-red-600 opacity-70 blur-md animate-ping" />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-red-600 opacity-70 blur-md animate-ping" />
          </div>
        </Link>

        {/* DREAM */}
        <Link
          to="/songs/dream"
          className="group relative block overflow-hidden rounded-xl bg-blue-900 shadow-lg transition hover:bg-blue-800"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/fly_over_the_moon.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <span className="ghost-title">DREAM</span>
            <p className="mt-2 text-sm italic text-gray-200 opacity-90 group-hover:opacity-100 transition">
              You get the so called nightmare, right? Everything is…
            </p>
          </div>
        </Link>

        {/* Better Bomb */}
        <Link
          to="/songs/betterbomb"
          className="group relative block rounded-xl bg-yellow-800 shadow-lg transition hover:bg-yellow-700"
        >
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">💣 Better Bomb</h3>
            <p className="text-sm opacity-80">
              Ticking down to oblivion — one detonation away.
            </p>
          </div>
        </Link>

        {/* GRIT */}
        <Link
          to="/songs/grit"
          className="group relative block overflow-hidden rounded-xl bg-gray-800 shadow-lg transition hover:bg-gray-700"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/rose.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">⚒️ GRIT</h3>
            <p className="text-sm opacity-80">
              Determination never dies — stone cold resolve.
            </p>
          </div>
        </Link>

        {/* EASY */}
        <Link
          to="/songs/easy"
          className="group relative block overflow-hidden rounded-xl shadow-lg transition"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/dancing_heart.jpg')" }}
          />
          {/* softer overlay for vibe */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-black/30 to-transparent" />

          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition text-pink-300">
              💗 EASY
            </h3>
            <p className="text-sm opacity-90">
              It felt natural… effortless. Like love was never meant to be hard.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default SongsList;