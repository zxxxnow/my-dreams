// The curse to up high

import React from "react";

function RED() {
  return (
    <div className="w-full text-white">

      {/* Hero (same responsive behavior) */}
      <div className="w-full md:px-8 lg:px-12">
        <div className="relative w-full h-[60vh] md:max-w-5xl md:mx-auto md:rounded-xl md:overflow-hidden">

          <img
            src="/red_entrance_horizontal.jpg"
            alt="RED cover"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-bold text-red-500 drop-shadow-lg">
              🔴 RED
            </h1>
            <p className="mt-2 text-lg text-gray-200 italic">
              Don’t text me. See me at the red.
            </p>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-10 space-y-10">

        {/* TEXT BLOCK */}
        <div className="bg-black/60 border border-red-500/30 rounded-xl p-6 text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            RED is a descent into exclusivity — a night in a Miami club where access is everything.
            The artist moves through a space where not everyone belongs.
          </p>

          <p>
            The VIP room isn’t just status — it’s separation.  
            A place where identity is distorted, where ego takes control.
          </p>

          <p className="text-red-300 italic">
            “You sound like me… but you ain’t in the VIP.”
          </p>

          <p>
            The red becomes overwhelming — lights, bodies, movement…  
            until everything blends into something darker.
          </p>
        </div>

        {/* VIDEO */}
        <div className="bg-black/60 border border-red-500/30 rounded-xl p-4">
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gjbjDp9h9Xk?si=8Xk_7eSH0ZvTgsZ-"
              title="RED - Lil Dream"
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

export default RED;