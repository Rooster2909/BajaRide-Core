import React, { useState } from 'react';
import { Reservation, Experience, ThemeMode } from '../types';
import {
  Shield,
  X,
  Activity,
  Star,
  RefreshCw,
  Users,
  Compass,
} from 'lucide-react';

interface MasterAdminModalProps {
  isOpen: boolean;
  theme: ThemeMode;
  reservations: Reservation[];
  experiences: Experience[];
  onClose: () => void;
  onResetDemoData: () => void;
  onUpdateExperience?: (exp: Experience) => void;
}

export const MasterAdminModal: React.FC<MasterAdminModalProps> = ({
  isOpen,
  theme,
  reservations,
  experiences,
  onClose,
  onResetDemoData,
  onUpdateExperience,
}) => {
  const [activeTab, setActiveTab] = useState<'METRICS' | 'OPERATORS' | 'EXPERIENCES'>('METRICS');
  if (!isOpen) return null;
  const isDark = theme === 'dark';

  const totalGMV = reservations.reduce((sum, r) => sum + r.totalPriceUSD, 0);
  const totalPlatformFees = Math.round(totalGMV * 0.12);

  const operators = Array.from(
    new Map(
      experiences.map(e => [
        e.socioId,
        {
          id: e.socioId,
          name: e.socioName,
          rating: e.socioRating,
          verified: e.socioVerified,
          reviews: e.socioReviewsCount,
          experiencesCount: experiences.filter(exp => exp.socioId === e.socioId).length,
          reservationsCount: reservations.filter(r => r.socioId === e.socioId).length,
        },
      ])
    ).values()
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div
        className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden p-6 sm:p-8 ${
          isDark ? 'bg-neutral-900 border-purple-900/50 text-white' : 'bg-white border-purple-200 text-neutral-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-700/40 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 block">
                Acceso Privado Maestro
              </span>
              <h3 className="text-lg font-black tracking-tight uppercase font-racing">
                Consola Master Admin — Plataforma BajaRide
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-4 p-1 rounded-2xl bg-neutral-950 border border-neutral-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('METRICS')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'METRICS'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Métricas de Red
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('OPERATORS')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'OPERATORS'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Operadores ({operators.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('EXPERIENCES')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'EXPERIENCES'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Control Destacadas ({experiences.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {activeTab === 'METRICS' && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">
                    Volumen GMV
                  </span>
                  <span className="text-lg font-black text-emerald-400">${totalGMV} USD</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">
                    Comisión Plataforma
                  </span>
                  <span className="text-lg font-black text-purple-400">${totalPlatformFees} USD</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">
                    Reservas Totales
                  </span>
                  <span className="text-lg font-black text-amber-400">{reservations.length}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">
                    Experiencias Activas
                  </span>
                  <span className="text-lg font-black text-blue-400">
                    {experiences.filter(e => e.isActive).length} / {experiences.length}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-purple-400" />
                  <span>Auditoría de Sistema y Seguridad Operativa</span>
                </h4>
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs font-mono text-neutral-300 max-h-52 overflow-y-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">[SECURITY]</span>
                    <span>Validación estricta: activeMode ≠ concesión de roles. Verificado.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">[CORE]</span>
                    <span>Single user identity provider activo. Sin duplicidad de registros.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">[GPS/MAP]</span>
                    <span>Coordenadas simuladas DEMO activas en San Felipe, Ojos Negros y Ensenada.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500">[DISPATCH]</span>
                    <span>Pipeline en tiempo real sincronizado para los 6 estados de operación.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">[STATE]</span>
                    <span>El cambio de rol DEMO conserva íntegramente las reservas y flota del usuario.</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'OPERATORS' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>Operadores Autorizados en Red BajaRide</span>
              </h4>
              <div className="space-y-2.5">
                {operators.map(op => (
                  <div
                    key={op.id}
                    className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{op.name}</span>
                        {op.verified && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Verificado SCORE
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">
                        ID Operador: {op.id} • {op.experiencesCount} experiencias publicadas • {op.reservationsCount} reservas procesadas
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-amber-400 font-bold block">★ {op.rating}</span>
                      <span className="text-[10px] text-neutral-500">{op.reviews} reseñas</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'EXPERIENCES' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                <span>Control de Experiencias y Estado "Destacada"</span>
              </h4>
              <div className="space-y-2.5">
                {experiences.map(exp => (
                  <div
                    key={exp.id}
                    className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={exp.heroImage}
                        alt={exp.title}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white truncate">{exp.title}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                              exp.isActive
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : 'bg-neutral-800 text-neutral-400'
                            }`}
                          >
                            {exp.isActive ? 'Activa' : 'Pausada'}
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-400 block truncate">
                          {exp.socioName} • ${exp.priceUSD} USD • {exp.category}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (onUpdateExperience) {
                          onUpdateExperience({ ...exp, featured: !exp.featured });
                        }
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                        exp.featured
                          ? 'bg-amber-500 text-neutral-950 shadow-sm'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-400'
                      }`}
                      title="Alternar estado de experiencia destacada"
                    >
                      <Star className={`w-3.5 h-3.5 ${exp.featured ? 'fill-current' : ''}`} />
                      <span>{exp.featured ? 'Destacada' : 'No Destacada'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-700/40 mt-4 shrink-0">
          <button
            type="button"
            onClick={onResetDemoData}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restablecer Datos Iniciales DEMO</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold cursor-pointer"
          >
            Cerrar Consola
          </button>
        </div>
      </div>
    </div>
  );
};
