import React, { useState } from 'react';
import { Coordinates, ThemeMode } from '../types';
import { Compass, Radio, MapPin, ZoomIn, ZoomOut, Layers } from 'lucide-react';

interface InteractiveMapProps {
  coordinates?: Coordinates;
  theme: ThemeMode;
  height?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  coordinates,
  theme,
  height = 'h-72',
}) => {
  const isDark = theme === 'dark';
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mapLayer, setMapLayer] = useState<'TERRAIN' | 'SATELLITE'>('TERRAIN');

  // Fallback seguro contra coordenadas undefined
  const safeCoords: Coordinates = {
    lat: coordinates?.lat ?? 31.0289,
    lng: coordinates?.lng ?? -114.8344,
    label: coordinates?.label ?? 'Punto de Encuentro San Felipe',
    reference: coordinates?.reference ?? 'Campamento Base Dunas Norte',
    vhfChannel: coordinates?.vhfChannel ?? '146.520 MHz',
    zone: coordinates?.zone ?? 'San Felipe',
  };

  return (
    <div
      className={`relative w-full ${height} rounded-2xl overflow-hidden border shadow-inner transition-colors duration-200 select-none ${
        isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-300'
      }`}
    >
      {/* Visual Topographic Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={isDark ? '#374151' : '#cbd5e1'}
              strokeWidth="0.8"
            />
            <circle cx="20" cy="20" r="1" fill={isDark ? '#4b5563' : '#94a3b8'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {/* Curvas topográficas simuladas de Baja California */}
        <path
          d="M 0 120 Q 150 40, 300 130 T 600 110 T 900 140"
          fill="none"
          stroke={isDark ? '#d97706' : '#b45309'}
          strokeWidth="1.2"
          strokeDasharray="4,4"
          opacity="0.5"
        />
        <path
          d="M 0 200 Q 200 160, 450 220 T 900 180"
          fill="none"
          stroke={isDark ? '#059669' : '#047857'}
          strokeWidth="1.2"
          strokeDasharray="6,4"
          opacity="0.4"
        />
      </svg>

      {/* Pine Central Simulado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex flex-col items-center animate-bounce duration-1000">
          <div className="px-3 py-1 rounded-full bg-black/90 text-white text-[11px] font-bold shadow-lg border border-emerald-500/40 flex items-center gap-1.5 backdrop-blur-md mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{safeCoords.label}</span>
          </div>
          <MapPin className="w-8 h-8 text-red-500 drop-shadow-md fill-red-500/30" />
        </div>
      </div>

      {/* Controles de Capa y Zoom */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
        <button
          type="button"
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
          className={`p-2 rounded-xl border backdrop-blur-md shadow-sm transition-all cursor-pointer ${
            isDark ? 'bg-neutral-900/80 border-neutral-700 text-white hover:bg-neutral-800' : 'bg-white/80 border-neutral-300 text-black hover:bg-white'
          }`}
          title="Acercar mapa"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
          className={`p-2 rounded-xl border backdrop-blur-md shadow-sm transition-all cursor-pointer ${
            isDark ? 'bg-neutral-900/80 border-neutral-700 text-white hover:bg-neutral-800' : 'bg-white/80 border-neutral-300 text-black hover:bg-white'
          }`}
          title="Alejar mapa"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => setMapLayer(prev => (prev === 'TERRAIN' ? 'SATELLITE' : 'TERRAIN'))}
          className={`p-2 rounded-xl border backdrop-blur-md shadow-sm transition-all cursor-pointer ${
            isDark ? 'bg-neutral-900/80 border-neutral-700 text-amber-400 hover:bg-neutral-800' : 'bg-white/80 border-neutral-300 text-amber-600 hover:bg-white'
          }`}
          title="Alternar vista satélite/terreno"
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>

      {/* Telemetría y Coordenadas Inferiores */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-700 text-[10px] text-neutral-300 font-mono flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {safeCoords.lat.toFixed(4)}° N, {safeCoords.lng.toFixed(4)}° W
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-amber-400 font-bold">{safeCoords.zone}</span>
        </div>

        {safeCoords.vhfChannel && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-700 text-[10px] font-mono text-emerald-400">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>VHF: {safeCoords.vhfChannel}</span>
          </div>
        )}
      </div>
    </div>
  );
};
