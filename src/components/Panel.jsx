import { useState } from "react";

function Panel({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-black/70 backdrop-blur-md border border-purple-400/40 rounded-xl overflow-hidden shadow-lg">
      
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-purple-500/20 transition"
      >
        <span className="text-lg font-semibold text-purple-300">
          {title}
        </span>
        <span className="text-sm text-gray-400">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 py-4 text-gray-300 text-sm">
          {children}
        </div>
      )}

    </div>
  );
}

export default Panel;