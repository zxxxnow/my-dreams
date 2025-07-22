import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useState } from "react";
import stateColors from "../../data/maps/stateColors";

const geoUrl = "/json/countries-50m.json";
const statesUrl = "/json/us-states-10m.json";

export default function WorldMap() {
  const [tooltip, setTooltip] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stateTooltip, setStateTooltip] = useState("");
  const [statePosition, setStatePosition] = useState({ x: 0, y: 0 });

  const [worldView, setWorldView] = useState({
    coordinates: [0, 0],
    zoom: 1,
  });

  const [usaView, setUsaView] = useState({
    coordinates: [-97, 38],
    zoom: 1,
  });

  return (
    <div className="flex flex-col items-center p-6 text-white relative w-full h-full">
      <h2 className="text-2xl font-bold mb-4">🪙 Sides of the Coin</h2>

      {/* World Map */}
      <div className="w-full bg-black aspect-[2/1] rounded-2xl relative mb-6 overflow-hidden">
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 p-2 rounded-lg text-xs flex gap-4 z-10">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#3B82F6] rounded-sm" />
            <span>USA</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#cccccc] rounded-sm" />
            <span>Neutral</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#EF4444] rounded-sm" />
            <span>The Others</span>
          </div>
        </div>

        <ComposableMap projectionConfig={{ scale: 160 }} style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup
            zoom={worldView.zoom}
            center={worldView.coordinates}
            onMoveEnd={setWorldView}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={geo.id === "840" ? "#3B82F6" : "#cccccc"}
                    stroke="#222"
                    onMouseEnter={() => {
                      const countryName =
                        geo.properties.NAME || geo.properties.name || "Unknown";
                      setTooltip(countryName);
                    }}
                    onMouseMove={(e) =>
                      setPosition({ x: e.clientX, y: e.clientY })
                    }
                    onMouseLeave={() => setTooltip("")}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* USA Map */}
      <div className="w-full bg-black aspect-[2/1] rounded-2xl relative overflow-hidden">
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 p-2 rounded-lg text-xs flex flex-col gap-1 z-10">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#EF4444] rounded-sm" />
            <span>Pure Red States</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#F87171] rounded-sm" />
            <span>Mixed but leaning Red</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-[#3B82F6] rounded-sm" />
            <span>Blue States</span>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #EF4444 0, #EF4444 3px, #3B82F6 3px, #3B82F6 6px)",
              }}
            />
            <span>Maine - Smokescreen</span>
          </div>
        </div>

        <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup
            zoom={usaView.zoom}
            center={usaView.coordinates}
            onMoveEnd={setUsaView}
          >
            <defs>
              <pattern
                id="stripedRedBlue"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <rect width="6" height="6" fill="#cccccc" />
                <path d="M0 0 L6 6 M-3 3 L3 9 M3 -3 L9 3" stroke="#EF4444" strokeWidth="1" />
                <path d="M0 6 L6 0 M-3 3 L3 -3 M3 9 L9 3" stroke="#3B82F6" strokeWidth="1" />
              </pattern>
            </defs>

            <Geographies geography={statesUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name;
                  const color = stateColors[stateName] || "#cccccc";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={color}
                      stroke="#222"
                      onMouseEnter={() =>
                        setStateTooltip(stateName || "Unknown")
                      }
                      onMouseMove={(e) =>
                        setStatePosition({ x: e.clientX, y: e.clientY })
                      }
                      onMouseLeave={() => setStateTooltip("")}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          outline: "none",
                          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltips */}
      {tooltip && (
        <div
          className="fixed bg-black bg-opacity-80 text-white text-xs px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm pointer-events-none z-50"
          style={{ top: position.y + 7, left: position.x + 7 }}
        >
          {tooltip}
        </div>
      )}

      {stateTooltip && (
        <div
          className="fixed bg-black bg-opacity-80 text-white text-xs px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm pointer-events-none z-50"
          style={{ top: statePosition.y + 7, left: statePosition.x + 7 }}
        >
          {stateTooltip}
        </div>
      )}
    </div>
  );
}
