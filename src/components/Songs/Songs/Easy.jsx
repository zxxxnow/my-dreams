// I thought in you my love when making this song

import React from "react";

function Easy() {
  return (
    <div className="w-full text-white">

      {/* Hero */}
        <div className="w-full md:px-8 lg:px-12">
            <div className="relative w-full h-[60vh] md:max-w-5xl md:mx-auto md:rounded-xl md:overflow-hidden">

                <img
                src="/dancing_heart.jpg"
                alt="EASY cover"
                className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6">
                <h1 className="text-4xl md:text-5xl font-bold text-pink-300 drop-shadow-lg">
                    💗 EASY
                </h1>
                <p className="mt-2 text-lg text-gray-200 italic">
                    It felt natural… effortless.
                </p>
                </div>

            </div>
        </div>

      {/* CONTENT WRAPPER (fixes desktop spacing) */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-10 space-y-10">

        {/* TEXT BLOCK */}
        <div className="bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6 text-gray-300 text-lg leading-relaxed">
          <p>
            EASY is a latin reggaeton pop track about love that flows without resistance.
            No tension, no struggle — just rhythm, connection, and feeling.
          </p>

          <p className="mt-4">
            Sometimes the simplest things carry the deepest meaning.
            And sometimes… what feels easy is exactly what we need.
          </p>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20">
            <p className="text-pink-200 italic">
              “Not everything that’s easy is shallow.”
            </p>
          </div>
        </div>

        {/* VIDEO BLOCK */}
        <div className="bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl p-4">
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Vzm1X8FQZOw"
              title="EASY - Lil Dream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Easy;