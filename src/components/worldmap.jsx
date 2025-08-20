// GlobalShippingDottedMap.jsx
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { motion } from "framer-motion";
import world110m from "world-atlas/countries-110m.json"; // topojson

// Dubai hub (Lon,Lat)
const DUBAI = [55.27, 25.20];

// Key destinations (Lon,Lat)
const DESTS = [
  { name: "USA", coords: [-99.0, 38.0] },
  { name: "Europe", coords: [8.0, 50.0] },
  { name: "India", coords: [78.96, 20.59] },
  { name: "East Asia", coords: [139.69, 35.68] },
  { name: "Australia", coords: [151.21, -33.87] },
];

export default function GlobalShippingDottedMap() {
  return (
    <section className="bg-blue-700 text-white py-16 px-6 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase text-sm/5 opacity-80">Industry Knowledge</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Powering innovation <br className="hidden md:block" />
          across industries, globally.
        </h2>
      </div>

      <div className="mt-12 bg-blue-500 p-2">
        {/* Use a wrapper to keep the SVG crisp and centered */}
        <div className="mx-auto max-w-6xl">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 145 }}
            width={980}
            height={501}
            style={{ width: "100%", height: "auto" }}
          >
            {/* --- DOT PATTERN --- */}
            <defs>
              {/* black micro-dots */}
              <pattern id="dotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="black" />
              </pattern>

              {/* glow for hub & nodes */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* --- CONTINENTS FILLED WITH DOTS (black) --- */}
            <Geographies geography={world110m}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="url(#dotPattern)"
                    stroke="transparent"
                    style={{ default: { opacity: 0.95 } }}
                  />
                ))
              }
            </Geographies>

            {/* --- SHIPPING LINES (scroll-drawn) --- */}
            {DESTS.map((d, i) => (
              <motion.g
                key={d.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.8 * i }}
              >
                <Line
                  from={DUBAI}
                  to={d.coords}
                  stroke="#ffffff"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  // slight curve to feel like an arc
                  curve={0.25} // (react-simple-maps supports 0..1)
                  style={{ opacity: 0.8 }}
                />
                {/* animated "draw" overlay */}
                <motion.line
                  // We overlay the SVG <line> path the library renders by drawing our own path:
                  // react-simple-maps exposes a <Line> but for animation we'll just overlay with a pathLength trick.
                  // The trick: Render another Line, but as a path we control.
                />
              </motion.g>
            ))}

            {/* --- HUB & DESTINATION MARKERS --- */}
            {/* Dubai hub */}
            <Marker coordinates={DUBAI}>
              <g filter="url(#glow)">
                <circle r={5.5} fill="#ffffff" />
                <motion.circle
                  r={11}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: [0.8, 0], scale: [0.6, 1.3] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
                />
              </g>
            </Marker>

            {/* Destinations */}
            {DESTS.map((d, i) => (
              <Marker key={d.name} coordinates={d.coords}>
                <motion.circle
                  r={4}
                  fill="#ffffff"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 220 }}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>

      {/* Stats area (optional – reuse yours) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mt-16">
        {[
          { number: "$5b+", title: "Equity value", desc: "More than $5b USD in equity value created" },
          { number: "932", title: "Ventures", desc: "Built, invested in and accelerated ventures globally" },
          { number: "81%", title: "Successful pilots", desc: "Hundreds of pilots with unmatched success" },
          { number: "85+", title: "Fortune 500 partners", desc: "Working with us to solve big challenges" },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold">{s.number}</h3>
            <p className="mt-2 text-sm opacity-80">{s.title}</p>
            <p className="text-xs opacity-70 mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
