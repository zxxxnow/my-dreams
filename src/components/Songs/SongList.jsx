// List of Song that lil dream promise to destroy the world 
// Offering to the unkown angel of desstruction, that also kept its promise

function SongsList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10 space-y-6">
      <h1 className="text-4xl font-bold text-center">🎶 Lil Dream’s Song Library</h1>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">

        {/* RED */}
        <a
          href="/songs/red"
          className="group relative block overflow-hidden rounded-xl border-2 border-purple-500 bg-purple-900 shadow-lg transition hover:border-red-600"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/red_entrance_horizontal.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">🔴 RED</h3>
            <p className="text-sm opacity-90">
              The first offering — drenched in sin and crimson lights.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-red-600 opacity-70 blur-md animate-ping" />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-red-600 opacity-70 blur-md animate-ping" />
          </div>
        </a>

        {/* DREAM */}
        <a
          href="/songs/dream"
          className="group relative block overflow-hidden rounded-xl bg-blue-900 shadow-lg transition hover:bg-blue-800"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/fly_over_the_moon.jpg')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <span className="ghost-title">DREAM</span>
            <p className="mt-2 text-sm italic text-gray-200 opacity-90 group-hover:opacity-100 transition">
              You get the so called nightmare, right? Everything is…
            </p>
          </div>
        </a>

        {/* Better Bomb */}
        <a
          href="/songs/betterbomb"
          className="group relative block rounded-xl bg-yellow-800 shadow-lg transition hover:bg-yellow-700"
        >
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">💣 Better Bomb</h3>
            <p className="text-sm opacity-80">Ticking down to oblivion — one detonation away.</p>
          </div>
        </a>

        {/* GRIT */}
        <a
          href="/songs/grit"
          className="group relative block rounded-xl bg-gray-800 shadow-lg transition hover:bg-gray-700"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/rose.jpg')" }}
            aria-hidden
          />
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">⚒️ GRIT</h3>
            <p className="text-sm opacity-80">Determination never dies — stone cold resolve.</p>
          </div>
        </a>

        {/* EASY */}
        <a
          href="/songs/easy"
          className="group relative block rounded-xl bg-green-800 shadow-lg transition hover:bg-green-700"
        >
          <div className="relative z-10 aspect-[16/9] flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition">🌿 EASY</h3>
            <p className="text-sm opacity-80">Some paths whisper ease — but every shortcut has a cost.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SongsList;



