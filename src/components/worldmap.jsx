// GlobalShippingDottedMap.jsx
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { motion } from "framer-motion";
import world110m from "world-atlas/countries-110m.json"; // topojson

const DUBAI = [55.27, 25.2]; // Hub
const DESTS = [
  { name: "USA", coords: [-99.0, 38.0] },
  { name: "Europe", coords: [8.0, 50.0] },
  { name: "India", coords: [78.96, 20.59] },
  { name: "East Asia", coords: [139.69, 35.68] },
  { name: "Australia", coords: [151.21, -33.87] },
];

export default function GlobalShippingDottedMap() {
  const stats = [
    {
      number: "$5b+",
      title: "Equity value",
      desc: "More than $5b USD in equity value created",
    },
    {
      number: "932",
      title: "Ventures",
      desc: "Built, invested in and accelerated ventures globally",
    },
    {
      number: "81%",
      title: "Successful pilots",
      desc: "Hundreds of pilots with unmatched success",
    },
    {
      number: "85+",
      title: "Fortune 500 partners",
      desc: "Working with us to solve big challenges",
    },
  ];

  return (
    <section className="bg-blue-700 text-white py-1 px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase text-sm opacity-80">Industry Knowledge</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Powering innovation <br className="hidden md:block" />
          across industries, globally.
        </h2>
      </div>

      {/* Map + Stats */}
      <div className="relative mt-9 mx-auto max-w-6xl">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 145 }}
          width={980}
          height={501}
          style={{ width: "100%", height: "auto" }}
        >
          {/* --- DOT PATTERN --- */}
          <defs>
            <pattern
              id="dotPattern"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="black" />
            </pattern>
            <filter
              id="glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Continents */}
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

          {/* Shipping Lines */}
          {DESTS.map((d, i) => (
            <motion.g
              key={d.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.5 * i }}
            >
              <Line
                from={DUBAI}
                to={d.coords}
                stroke="#ffffff"
                strokeWidth={1.6}
                curve={0.25}
                style={{ opacity: 0.8 }}
              />
            </motion.g>
          ))}

          {/* Hub Marker */}
          <Marker coordinates={DUBAI}>
            <g filter="url(#glow)">
              <circle r={5.5} fill="#ffffff" />
              <motion.circle
                r={11}
                fill="none"
                stroke="#ffffff"
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: [0.8, 0],
                  scale: [0.6, 1.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeOut",
                }}
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
                transition={{
                  delay: 0.15 + i * 0.1,
                  type: "spring",
                  stiffness: 220,
                }}
              />
            </Marker>
          ))}
        </ComposableMap>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 rounded-2xl p-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold">{s.number}</h3>
                <p className="mt-1 text-sm sm:text-base opacity-80">
                  {s.title}
                </p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
