// Let the hate never die and let it express in it most powerful way

import { useState } from "react";

import blackList from "../../data/curses/blackList";
import Panel from "../Panel";

function Curses() {
  return (
    <div className="w-full text-white px-4 md:px-8 lg:px-12 py-10 space-y-6 max-w-5xl mx-auto">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-300">
        🧿 CURSES 
        {/* ODIA SIN MIEDO */}
      </h1>

      {/* White Hand */}
      <Panel title=" Black hand White hand">
        <p>The tow sides of the ying yang always collide, fuck all that , let the rage come and go, let the peace heal us, i equilibrate, i dont know
            how to describ e it , but , death kinda fixes things, innevitable, sometimes it feels liek it comes to fast , but it is what it is, only god knows everytime,
            , just remember that every blessing is a curse and that i pronfund hate, maybe some one out there truly love with all.
        </p>
      </Panel>

      {/* People Being Cursed */}
      <Panel title="☠️ People Being Cursed">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-red-500/30 rounded-lg overflow-hidden">
                
                <thead className="bg-red-900/40 text-red-300">
                <tr>
                    <th className="px-4 py-2 border-b border-red-500/30">Person</th>
                    <th className="px-4 py-2 border-b border-red-500/30">Curse</th>
                </tr>
                </thead>

                <tbody>
                {blackList.map((person, i) => (
                    <tr key={i} className="hover:bg-red-500/10 transition">
                    
                    {/* Person name */}
                    <td className="px-4 py-2 border-b border-red-500/20">
                        {person.name}
                    </td>

                    {/* Curse with fallback */}
                    <td className="px-4 py-2 border-b border-red-500/20 text-red-400">
                        {person.curse || "None"}
                    </td>

                    </tr>
                ))}
                </tbody>

            </table>
        </div>
      </Panel>
      

    </div>
  );
}

export default Curses;