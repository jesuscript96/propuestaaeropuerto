import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, PlaneTakeoff, ExternalLink, Eye, ChevronLeft, ChevronRight, Activity, MapPin, Building, MoveRight, Trophy, X, Target, Sparkles, Layers, Lightbulb, Heart, Gift, Smile, ZoomIn, ZoomOut, RotateCw, RefreshCw } from 'lucide-react';

const SoccerBallIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Outer circle */}
    <circle cx="12" cy="12" r="10" />
    {/* Center pentagon */}
    <polygon points="12 9 9.5 11 10.5 14 13.5 14 14.5 11" fill="currentColor" fillOpacity="0.2" />
    {/* Lines connecting center pentagon to outer circle */}
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="3.5" y1="9.5" x2="9.5" y2="11" />
    <line x1="20.5" y1="9.5" x2="14.5" y2="11" />
    <line x1="6.5" y1="19.5" x2="10.5" y2="14" />
    <line x1="17.5" y1="19.5" x2="13.5" y2="14" />
  </svg>
);

const Slide1Cover = ({ onClick }: { onClick: () => void; key?: React.Key }) => (
  <div 
    onClick={onClick}
    className="relative flex flex-col items-center justify-center p-8 text-center h-full max-w-5xl mx-auto cursor-pointer select-none"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8 md:mb-12"
    >
      <img src="/logo.png" alt="Publimex Logo" className="h-48 md:h-72 object-contain drop-shadow-2xl" />
    </motion.div>

    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-4xl md:text-6xl font-squada tracking-wider text-white drop-shadow-lg"
    >
      EXPERIENCIA QUE INSPIRA
    </motion.h2>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 6, 0] }}
      transition={{ 
        delay: 1.2, 
        duration: 2.5, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
      className="absolute bottom-24 left-0 right-0 flex flex-col items-center gap-1.5 text-white/50 text-[10px] md:text-xs uppercase tracking-widest pointer-events-none"
    >
      <span>Toca o desliza para comenzar</span>
      <ChevronRight className="w-4 h-4 rotate-90 text-[#E60000] bg-white rounded-full p-0.5 animate-bounce" />
    </motion.div>
  </div>
);

const Slide1QuienEsPublimex = () => {
  const concepts = [
    {
      num: "01",
      title: "Imagen de marca potente"
    },
    {
      num: "02",
      title: "Rojo predominante"
    },
    {
      num: "03",
      title: "Logo visible"
    },
    {
      num: "04",
      title: "Frases inspiradoras"
    }
  ];

  return (
    <div className="relative flex flex-col justify-center p-6 pb-32 md:p-12 md:pb-32 lg:p-20 h-full bg-[#E60000] text-white select-none overflow-y-auto lg:overflow-hidden">
      {/* Clean background lines for editorial feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none border-l border-r border-white mx-16 lg:mx-32" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch z-10">
        
        {/* Left Column: Title and Answer */}
        <div className="lg:col-span-4 flex flex-col justify-start gap-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest self-start rounded-sm border border-white/10 shadow-md">
              Publimex
            </div>
            
            <h2 className="text-4xl md:text-6xl font-squada text-white uppercase tracking-wider leading-none">
              ¿Quién es <br className="hidden lg:block" />
              Publimex?
            </h2>
            <div className="w-16 h-1 bg-black mt-1" />
            
            <p className="text-xl md:text-3xl font-light italic tracking-wide text-white/95 mt-4 font-sans">
              "Alguien que inspira"
            </p>
          </div>
        </div>

        {/* Right Column: Key Concepts (Only titles) and Large Image underneath */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-6 lg:pl-8">
          <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
              Pilares de Comunicación
            </span>
            <h3 className="text-2xl md:text-3xl font-squada tracking-wider text-white uppercase leading-tight">
              Los Conceptos Clave de Nuestra Presencia
            </h3>
          </div>

          {/* Concepts Grid (No Subtexts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 my-2">
            {concepts.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 6 }}
                  className="group flex gap-4 items-center"
                >
                  <span className="text-2xl font-squada tracking-wider text-white/35 group-hover:text-yellow-400 transition-colors duration-300 w-8 flex-shrink-0">
                    {item.num}
                  </span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>

          {/* Large Spectacular Image underneath the concepts */}
          <div className="overflow-hidden border-2 border-white shadow-2xl relative aspect-video w-full">
            <img 
              src="/publimex_espectacular.jpg" 
              alt="Publimex Espectacular" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

const Slide2Agencia = () => {
  const questionsData = [
    { id: 1, title: "¿Para quién?", subtitle: "La Audiencia" },
    { id: 2, title: "¿Por qué?", subtitle: "El Insight" },
    { id: 3, title: "¿Cómo?", subtitle: "La Creatividad" },
    { id: 4, title: "¿Cuándo?", subtitle: "El Timing" },
    { id: 5, title: "¿Cuál es el medio?", subtitle: "El Soporte" },
    { id: 6, title: "¿Cuál es el objetivo?", subtitle: "La Conversión" },
    { id: 7, title: "¿Cuánto tiempo tenemos?", subtitle: "La Viabilidad" }
  ];

  return (
    <div className="relative flex flex-col justify-center p-6 pb-32 md:p-12 md:pb-32 lg:p-20 h-full bg-[#E60000] text-white select-none overflow-y-auto lg:overflow-hidden">
      {/* Clean background lines for editorial feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none border-l border-r border-white mx-16 lg:mx-32" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch z-10">

        {/* Left Column: Title / Brand context */}
        <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest self-start rounded-sm border border-white/10 shadow-md">
              La Brújula Creativa
            </div>
            <h2 className="text-4xl md:text-6xl font-squada text-white uppercase tracking-wider leading-none">
              Experiencias <br className="hidden lg:block" />
              que inspiran
            </h2>
            <div className="w-16 h-1 bg-black mt-2" />
          </div>

          <div className="mt-8 border-l-2 border-white/30 pl-4 py-2 bg-black/25">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest block mb-1">
              Definición: Inspirar
            </span>
            <p className="text-xs md:text-sm text-white/95 italic leading-relaxed font-normal">
              "Infundir o hacer nacer en el ánimo o la mente afectos, ideas, designios, etc."
            </p>
          </div>
        </div>

        {/* Right Column: The 7 Questions */}
        <div className="lg:col-span-8 flex flex-col justify-center gap-6 lg:pl-8">
          <div className="flex flex-col gap-1 border-b border-white/10 pb-4 mb-4">
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
              La Brújula Estratégica
            </span>
            <h3 className="text-2xl md:text-3xl font-squada tracking-wider text-white uppercase leading-tight">
              7 Preguntas Antes de Ejecutar una Campaña
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            {questionsData.map((q) => (
              <motion.div
                key={q.id}
                whileHover={{ x: 6 }}
                className={`group flex gap-4 items-center ${q.id === 7 ? 'md:col-span-2' : ''}`}
              >
                <span className="text-3xl font-squada tracking-wider text-white/35 group-hover:text-yellow-400 transition-colors duration-300 w-8">
                  0{q.id}
                </span>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                    {q.title}
                  </h4>
                  <span className="text-[10px] text-white/50 tracking-widest font-light uppercase">
                    {q.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const Slide2Menu = ({ onSelectCampaign, selectedCampaign }: { onSelectCampaign: (campaign: 'cdmx' | 'aroma') => void; selectedCampaign: 'cdmx' | 'aroma' | null; key?: React.Key }) => {
  return (
    <div className="relative flex flex-col justify-center p-6 pb-32 md:p-12 md:pb-32 lg:p-20 h-full bg-[#E60000] text-white select-none overflow-y-auto lg:overflow-hidden">
      {/* Clean background lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none border-l border-r border-white mx-16 lg:mx-32" />

      <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 md:gap-12 z-10">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm border border-white/10 mb-4">
            Repositorio de Propuestas
          </div>
          <h2 className="text-4xl md:text-6xl font-squada text-white uppercase tracking-wider leading-none">
            Selecciona una propuesta
          </h2>
          <p className="text-xs md:text-sm text-white/70 font-light mt-2 max-w-xl">
            Explora las diferentes líneas estratégicas y propuestas creativas desarrolladas para conectar la marca con la emoción y el espacio urbano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4">
          {/* Option 1: CDMX */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCampaign('cdmx')}
            className={`group cursor-pointer p-6 md:p-8 rounded-none border-2 transition-all duration-300 flex flex-col justify-between aspect-video md:aspect-[4/3] relative overflow-hidden ${selectedCampaign === 'cdmx'
              ? 'bg-white/5 border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]'
              : 'bg-transparent border-white/10 hover:border-white hover:bg-white/5 shadow-none'
              }`}
          >
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-red-600/10 blur-[80px] pointer-events-none group-hover:bg-red-600/20 transition-all duration-500" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 border border-white/20 rounded-none flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Map className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-1">PROPUESTA A</span>
                <h3 className="text-2xl md:text-4xl font-squada tracking-wider text-white uppercase leading-none group-hover:text-yellow-400 transition-colors">
                  CDMX: Los Espacios y El Mundial
                </h3>
              </div>
              <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                Apropiación total del espacio urbano en la capital. Conectamos los puntos estratégicos de afluencia con la pasión mundialista.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1.5 self-start mt-4 text-[11px] font-bold uppercase tracking-widest text-white/70 group-hover:text-yellow-400 transition-colors underline decoration-white/35 group-hover:decoration-yellow-400 underline-offset-4">
              <span>see more</span>
              <MoveRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Option 2: Sintiendo la Ciudad de México */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCampaign('aroma')}
            className={`group cursor-pointer p-6 md:p-8 rounded-none border-2 transition-all duration-300 flex flex-col justify-between aspect-video md:aspect-[4/3] relative overflow-hidden ${selectedCampaign === 'aroma'
              ? 'bg-white/5 border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]'
              : 'bg-transparent border-white/10 hover:border-white hover:bg-white/5 shadow-none'
              }`}
          >
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-yellow-500/10 blur-[80px] pointer-events-none group-hover:bg-yellow-500/20 transition-all duration-500" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 border border-white/20 rounded-none flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-1">PROPUESTA B</span>
                <h3 className="text-2xl md:text-4xl font-squada tracking-wider text-white uppercase leading-none group-hover:text-yellow-400 transition-colors">
                  Sintiendo la Ciudad de México
                </h3>
              </div>
              <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                Aprovechamos la oportunidad única de que la Ciudad de México es la anfitriona del Mundial 2026. Una experiencia emotiva centrada en la bienvenida y el latir de la ciudad al recibir al mundo entero.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1.5 self-start mt-4 text-[11px] font-bold uppercase tracking-widest text-white/70 group-hover:text-yellow-400 transition-colors underline decoration-white/35 group-hover:decoration-yellow-400 underline-offset-4">
              <span>see more</span>
              <MoveRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slide2Concepto = ({ campaign }: { campaign: 'cdmx' | 'aroma'; key?: React.Key }) => {
  const isAroma = campaign === 'aroma';

  return (
    <div className="relative flex flex-col justify-center p-6 pt-24 pb-32 md:p-8 md:pt-28 md:pb-36 lg:p-12 lg:pt-0 lg:pb-0 h-full bg-gradient-to-b from-[#900000] via-[#E60000] to-[#500000] overflow-y-auto lg:overflow-hidden select-none">
      {/* Ambient light effects */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center gap-6 lg:gap-8 py-8 lg:py-0 pb-28 lg:pb-0 z-10">

        {/* Title block */}
        <div className="text-center lg:text-left pt-12 lg:pt-0">
          <h2 className="text-3xl md:text-5xl font-squada text-white tracking-widest uppercase drop-shadow-md">
            El Concepto de Campaña
          </h2>
          <p className="text-[10px] md:text-xs text-white/60 tracking-widest uppercase mt-1">
            {isAroma ? "El latir de la CDMX en el aeropuerto al recibir al mundo entero" : "Estructura estratégica e impacto del mensaje en la metrópoli"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Triangle diagram */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/3] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="line-publimex-left" x1="50%" y1="15%" x2="15%" y2="80%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isAroma ? "#EAB308" : "#E60000"} stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="line-publimex-right" x1="50%" y1="15%" x2="85%" y2="80%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isAroma ? "#E60000" : "#EAB308"} stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="line-left-right" x1="15%" y1="80%" x2="85%" y2="80%">
                    <stop offset="0%" stopColor={isAroma ? "#EAB308" : "#E60000"} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={isAroma ? "#E60000" : "#EAB308"} stopOpacity="0.8" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines */}
                <motion.path
                  d="M 50 15 L 15 80"
                  stroke="url(#line-publimex-left)"
                  strokeWidth="0.75"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <motion.path
                  d="M 50 15 L 85 80"
                  stroke="url(#line-publimex-right)"
                  strokeWidth="0.75"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />

                <motion.path
                  d="M 15 80 L 85 80"
                  stroke="url(#line-left-right)"
                  strokeWidth="0.75"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                />
              </svg>

              {/* Top Node - Publimex */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-white/35 transition-all duration-500 w-24 h-24 -translate-y-4 pointer-events-none" />
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-white/40 rounded-full flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] p-2 transition-all duration-300 group-hover:scale-105">
                    <img src="/logo.png" alt="Publimex Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center px-2 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg max-w-[120px]">
                    <span className="text-[7px] text-white/70 font-bold uppercase tracking-widest block">EL NEXO</span>
                    <span className="text-[10px] md:text-xs font-bold text-white leading-tight block">Publimex</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Left Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute top-[80%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="absolute inset-0 bg-red-600/30 rounded-full blur-2xl group-hover:bg-red-600/50 transition-all duration-500 w-24 h-24 -translate-y-4 pointer-events-none" />
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-red-600/40 to-red-950/60 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-red-400 group-hover:scale-105">
                    {isAroma ? (
                      <Heart className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    ) : (
                      <Map className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    )}
                  </div>
                  <div className="text-center px-2 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg max-w-[120px]">
                    <span className="text-[7px] text-red-400 font-bold uppercase tracking-widest block">
                      {isAroma ? "EL SENTIMIENTO" : "EL ESPACIO"}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-white leading-tight block">
                      {isAroma ? "El Sentir" : "Ciudad de México"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Right Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                className="absolute top-[80%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="absolute inset-0 bg-yellow-500/25 rounded-full blur-2xl group-hover:bg-yellow-500/45 transition-all duration-500 w-24 h-24 -translate-y-4 pointer-events-none" />
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-yellow-500/30 to-amber-950/50 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-yellow-400 group-hover:scale-105">
                    {isAroma ? (
                      <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    ) : (
                      <img src="/mundial.png" alt="Mundial" className="w-8 h-8 md:w-10 md:h-10 object-contain filter drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                    )}
                  </div>
                  <div className="text-center px-2 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg max-w-[130px]">
                    {isAroma ? (
                      <span className="text-[7px] text-red-400 font-bold uppercase tracking-widest block font-sans line-through decoration-red-500 decoration-1">
                        FIFA World Cup®
                      </span>
                    ) : (
                      <span className="text-[7px] text-yellow-400 font-bold uppercase tracking-widest block font-sans">
                        FIFA World Cup®
                      </span>
                    )}
                    <span className="text-[10px] md:text-xs font-bold text-white leading-tight block uppercase">
                      {isAroma ? "CDMX Anfitriona del Mundial" : "La Fiesta del Fútbol"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Core Concepts */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full text-white">
            <div>
              <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white font-squada mb-1">
                Las Bases del Concepto
              </h4>
              <p className="text-[10px] md:text-xs text-white/50 tracking-wider uppercase font-light">
                {isAroma ? "La dimensión sensorial y la hospitalidad mexicana" : "Los pilares conceptuales y la estructura de la propuesta"}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {isAroma ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">01 / EL LATIDO</span>
                    <div className="flex items-center gap-2 text-white">
                      <Activity className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">Sentimiento Mundialista</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      El aeropuerto de la CDMX se convierte en el corazón de la bienvenida, donde el país late con fuerza ante la fiesta del fútbol.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">02 / ANFITRIONAR</span>
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">CDMX Anfitriona</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      Recibimos al mundo entero con la calidez única de nuestra cultura y el orgullo absoluto de dar la bienvenida en casa.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">03 / EL SENTIR</span>
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">Sensación y Vínculos</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      De los sentidos nace el olfato y las flores de bienvenida. Conectamos marcas con el abrazo y la emoción real del reencuentro.
                    </p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">01 / ALCANCE</span>
                    <div className="flex items-center gap-2 text-white">
                      <Layers className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">Profundidad</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      No son impactos aislados. Conectamos cada punto estratégico del trayecto del aficionado para tejer una historia continua y omnipresente.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">02 / FORMATO</span>
                    <div className="flex items-center gap-2 text-white">
                      <Sparkles className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">Creatividad</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      Utilizamos formatos premium, dinamismo visual y perspectivas inmersivas que logran romper con la saturación y asombrar al espectador.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">03 / CONEXIÓN</span>
                    <div className="flex items-center gap-2 text-white">
                      <Lightbulb className="w-5 h-5 text-white/80" />
                      <h4 className="text-base font-bold tracking-wider uppercase font-squada">Concepto</h4>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      Una propuesta robusta con un hilo conductor claro: Publimex es el nexo directo entre la metrópoli y la pasión mundialista.
                    </p>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide3Mensaje = ({ campaign }: { campaign: 'cdmx' | 'aroma'; key?: React.Key }) => {
  const isAroma = campaign === 'aroma';

  return (
    <div className="relative flex flex-col justify-center p-6 pt-24 pb-32 md:p-12 md:pt-28 md:pb-36 lg:p-20 lg:pt-0 lg:pb-0 h-full bg-[#E60000] text-white select-none overflow-y-auto lg:overflow-hidden">
      {/* Clean background lines for editorial feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none border-l border-r border-white mx-16 lg:mx-32" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch z-10">

        {/* Left Column: Title / Brand context */}
        <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest self-start rounded-sm border border-white/10">
              Estrategia de Comunicación
            </div>
            <h2 className="text-4xl md:text-6xl font-squada text-white uppercase tracking-wider leading-none">
              El Mensaje <br className="hidden lg:block" />
              a Transmitir
            </h2>
            <div className="w-16 h-1 bg-black mt-2" />
          </div>

          <div className="mt-8 lg:mt-0">
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider block mb-1">
              Perspectiva del Receptor
            </span>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs uppercase font-medium">
              La lectura inmediata del Director de Marketing de una marca al ver la campaña.
            </p>
          </div>
        </div>

        {/* Right Column: The Core Message and details */}
        <div className="lg:col-span-8 flex flex-col justify-center gap-8 lg:pl-4">

          {/* Percepción del Decision Maker Section */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
              La Percepción del Decision Maker
            </span>

            <div className="relative">
              {/* Quote Mark */}
              <span className="absolute -top-10 -left-6 text-8xl font-squada text-white/10 pointer-events-none select-none">“</span>

              <h3 className="text-3xl md:text-5xl font-squada tracking-wider text-white uppercase mb-3 leading-tight">
                {isAroma ? '"Publimex siente lo mismo que siente la Ciudad de México, anfitriona del Mundial"' : '"Captura la Ciudad de México"'}
              </h3>

              <p className="text-sm md:text-base text-white/85 font-light leading-relaxed">
                {isAroma ? (
                  <span>
                    El Director de Compras (Decision Maker) no percibe un soporte publicitario plano. Entiende que <strong className="text-white font-semibold underline decoration-white decoration-2">Publimex siente y late en sintonía con la Ciudad de México, anfitriona del Mundial</strong>. Al recibir y dar la bienvenida al mundo entero en el aeropuerto, la marca se fusiona con la calidez y el orgullo local, creando un vínculo emocional indeleble desde el primer contacto.
                  </span>
                ) : (
                  <span>
                    El tomador de decisiones de compras de marketing de una marca no percibe un simple espectacular. Percibe una <strong className="text-white font-semibold underline decoration-white decoration-2">apropiación total</strong> del espacio urbano y una conexión inmediata con la emotion de millones de personas durante la fiesta del fútbol.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Structured Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-6 mt-2">
            {isAroma ? (
              <>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">01 / LA BIENVENIDA</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">El Recibimiento</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    El aeropuerto como el punto de inicio del sentimiento mundialista y la emoción del viaje.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">02 / EL SENTIR</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">CDMX Anfitriona</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    La capital entera vibrando y sintiendo el Mundial con la hospitalidad que nos caracteriza.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">03 / EL VÍNCULO</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">El Abrazo Real</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    Integrar la marca en el momento culminante del reencuentro y la alegría en la sala de espera.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">01 / ENFOQUE</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">Apropiación Urbana</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    Dominio absoluto de los puntos con mayor afluencia de la capital.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">02 / IMPACTO</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">Conexión Real</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    Alineación directa con la pasión mundialista y el orgullo nacional.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">03 / CONTINUIDAD</span>
                  <h4 className="text-base font-bold text-white uppercase tracking-wide">Omnipresencia</h4>
                  <p className="text-xs text-white/70 leading-normal font-light">
                    Presencia ininterrumpida a lo largo de toda la experiencia del aficionado.
                  </p>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

const ConceptSlide = ({ icon: Icon, title, description, badge, captureUrl }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVideo = captureUrl?.endsWith('.mp4');

  // Zoom and Rotate State
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset values when closed or opened
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Drag Handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="h-full w-full overflow-y-auto flex lg:items-center justify-center p-6 pt-24 pb-32 md:p-16 md:pt-28 md:pb-36 lg:p-12 lg:pt-0 lg:pb-0">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Left Side: Text Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-4 md:mb-8 w-16 h-16 md:w-20 md:h-20 bg-black/40 border border-white/20 rounded-none flex items-center justify-center backdrop-blur-md">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block py-1 px-3 rounded-none border border-white/30 bg-black/20 text-white/75 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-5">
              {badge}
            </span>
            <h3 className="text-3xl md:text-6xl font-squada tracking-widest text-white leading-none mb-4 md:mb-6 uppercase">
              {title}
            </h3>
            <p className="text-lg md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Right Side: Demo Card */}
        {captureUrl && (
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(true)}
              className="group cursor-pointer bg-black border-2 border-white p-2.5 rounded-none shadow-[6px_6px_0px_#000000] w-full max-w-md aspect-video md:aspect-[4/3] flex flex-col justify-between overflow-hidden relative"
            >
              {/* Media Content */}
              <div className="absolute inset-0 opacity-70 group-hover:opacity-95 transition-opacity duration-300">
                {isVideo ? (
                  <video
                    src={captureUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={captureUrl} alt="Vista previa" className="w-full h-full object-cover" />
                )}
              </div>

              {/* Dark gradient overlay for UI details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />

              {/* Header Title inside card */}
              <div className="relative z-10 p-2 text-white/95">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#E60000] bg-white px-2 py-0.5 uppercase">MOCKUP VIVO</span>
              </div>

              {/* Floating interact button */}
              <div className="relative z-10 flex items-center gap-2 self-end bg-black border border-white rounded-none py-1.5 px-3 text-xs text-white uppercase tracking-wider font-semibold shadow-lg mb-2 mr-2 group-hover:bg-zinc-900 transition-colors">
                <Eye className="w-4 h-4 text-[#E60000]" />
                <span>Ampliar Mockup</span>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && captureUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 overflow-hidden select-none"
            onClick={() => setIsOpen(false)}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            {/* Zoom / Rotate Controls */}
            <div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 border border-white/20 backdrop-blur-md px-6 py-2.5 flex items-center gap-6 z-50 rounded-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setScale(prev => Math.min(prev + 0.5, 4))}
                className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Acercar"
              >
                <ZoomIn className="w-6 h-6 text-[#E60000]" />
              </button>
              <button
                onClick={() => setScale(prev => Math.max(prev - 0.5, 1))}
                className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Alejar"
              >
                <ZoomOut className="w-6 h-6 text-[#E60000]" />
              </button>
              <button
                onClick={() => setRotation(prev => (prev + 90) % 360)}
                className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Girar 90°"
              >
                <RotateCw className="w-6 h-6 text-[#E60000]" />
              </button>
              <button
                onClick={() => {
                  setScale(1);
                  setRotation(0);
                  setPosition({ x: 0, y: 0 });
                }}
                className="p-1.5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Restablecer"
              >
                <RefreshCw className="w-6 h-6 text-[#E60000]" />
              </button>
            </div>

            {/* Lightbox Image/Video Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-h-[85vh] max-w-6xl flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative flex items-center justify-center w-full h-full"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {isVideo ? (
                  <video
                    src={captureUrl}
                    autoPlay
                    controls
                    loop
                    className="w-full h-full max-h-[80vh] object-contain pointer-events-auto select-none"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                      cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                      transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                ) : (
                  <img
                    src={captureUrl}
                    alt={title}
                    className="w-full h-full max-h-[80vh] object-contain pointer-events-none select-none"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                      cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                      transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black hover:bg-zinc-900 text-white rounded-none p-2.5 transition-colors border border-white cursor-pointer z-50 shadow-md"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6 text-[#E60000]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCampaign, setSelectedCampaign] = useState<'cdmx' | 'aroma' | null>(null);

  // Swipe gesture detection
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  // Total slides calculations
  // Slides index mapping:
  // 0: Cover
  // 1: ¿Quién es Publimex?
  // 2: Agencia
  // 3: Menu
  // 4+: Campaign specific slides
  const campaignSlidesCount = selectedCampaign === 'aroma' ? 7 : (selectedCampaign === 'cdmx' ? 6 : 1);
  const totalSlides = 4 + campaignSlidesCount;

  const nextSlide = useCallback(() => {
    if (currentSlide === 3 && !selectedCampaign) {
      // If user presses Next on Menu, default to 'cdmx' to avoid locking
      setSelectedCampaign('cdmx');
      setCurrentSlide(4);
      return;
    }
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [currentSlide, selectedCampaign, totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleSelectCampaign = (campaign: 'cdmx' | 'aroma') => {
    setSelectedCampaign(campaign);
    setCurrentSlide(4); // Advance directly to Concepto slide
  };

  const renderSlide = () => {
    if (currentSlide === 0) return <Slide1Cover key="slide0" onClick={nextSlide} />;
    if (currentSlide === 1) return <Slide1QuienEsPublimex key="slide1" />;
    if (currentSlide === 2) return <Slide2Agencia key="slide2" />;
    if (currentSlide === 3) return <Slide2Menu key="slide3" onSelectCampaign={handleSelectCampaign} selectedCampaign={selectedCampaign} />;

    // Campaign Specific Flow
    const campaignKey = selectedCampaign || 'cdmx';
    const relativeIndex = currentSlide - 4;

    if (relativeIndex === 0) {
      return <Slide2Concepto key={`${campaignKey}-concepto`} campaign={campaignKey} />;
    }
    if (relativeIndex === 1) {
      return <Slide3Mensaje key={`${campaignKey}-mensaje`} campaign={campaignKey} />;
    }

    const proposalIndex = relativeIndex - 2;

    if (campaignKey === 'cdmx') {
      const cdmxProposals = [
        {
          icon: MapPin,
          badge: "Propuesta 1",
          title: "El Mapa del Evento",
          description: <span>Posicionamos todos los <strong className="text-white font-semibold">espacios relacionados con el fútbol</strong> en la ciudad y los conectamos estratégicamente con las <strong className="text-white font-semibold">ubicaciones de Publimex</strong>.</span>,
          captureUrl: "/laCiudadMundialista.png"
        },
        {
          icon: PlaneTakeoff,
          badge: "Propuesta 2",
          title: "Del Avión al Estadio",
          description: <span>Un recorrido visual <strong className="text-white font-semibold">timelapse</strong>. Acompañamos al aficionado desde que aterriza hasta que llega a su destino, con Publimex presente en cada paso del trayecto.</span>,
          captureUrl: "/timelapsev2.mp4"
        },
        {
          icon: ExternalLink,
          badge: "Propuesta 3",
          title: "Escala de Ciudad",
          description: <span>El Estadio Azteca alberga a <strong className="text-yellow-400 font-bold">87,000</strong> personas. La Ciudad de México a más de <strong className="text-yellow-400 font-bold">25 millones</strong>. Llevamos la escala del evento a la magnitud de la metrópoli.</span>,
          captureUrl: "/BIGAZTECAREAL.png"
        },
        {
          icon: Eye,
          badge: "Propuesta 4",
          title: "La Perspectiva",
          description: <span>¿Qué vería la valla si tuviera ojos? <em className="text-white/90">"Si yo puedo ver a miles de personas frente a mí, miles de personas pueden verme a mí"</em>.</span>,
          captureUrl: "/perspectiva.jpeg"
        }
      ];

      const prop = cdmxProposals[proposalIndex];
      if (!prop) return null;

      return (
        <ConceptSlide
          key={`cdmx-prop-${proposalIndex}`}
          icon={prop.icon}
          badge={prop.badge}
          title={prop.title}
          description={prop.description}
          captureUrl={prop.captureUrl}
        />
      );
    } else {
      const aromaProposals = [

        {
          icon: Gift,
          badge: "Propuesta 1 - Bienvenida",
          title: "La Bienvenida",
          description: <span>Publimex da la bienvenida a los que llegan, sintiéndose también anfitriona del evento. Conectamos la marca con el sentimiento de recibir y dar acogida a quienes ingresan a la Ciudad de México.</span>,
          captureUrl: "/Bienvenido.png"
        },
        {
          icon: Heart,
          badge: "Propuesta 2 - Prioridades",
          title: "El Primer Gol del Viaje",
          description: <span>El primer gol de un viaje no se mete en la cancha, se mete en la sala de espera al abrazar a quien te recibe. Priorizamos la emoción de la llegada.</span>,
          captureUrl: "/PRIORIDADES.png"
        },
        {
          icon: Building,
          badge: "Propuesta 3 - Anfitrión",
          title: "Flores de Anfitrión",
          description: <span>Mundial, CDMX y flores de anfitrión. Creamos un recibimiento icónico donde la ciudad se viste de flores para acoger al mundo entero.</span>,
          captureUrl: "/ANFITRION.png"
        },
        {
          icon: Trophy,
          badge: "Propuesta 4 - Éxito Mundial",
          title: "Flores como Trofeo",
          description: <span>Campeones del sentir. Coronamos el éxito del evento y de la campaña con flores, el símbolo universal del festejo y del triunfo.</span>,
          captureUrl: "/CAMPEON.png"
        },
        {
          icon: Sparkles,
          badge: "Propuesta 5 - Crecimiento",
          title: "Aficiones que Florecen",
          description: <span>La pasión mundialista que crece de forma orgánica. Elementos visuales que florecen a lo largo de la ciudad contagiando el entusiasmo.</span>,
          captureUrl: "/aroma_crecimiento.png"
        }
      ];

      const prop = aromaProposals[proposalIndex];
      if (!prop) return null;

      return (
        <ConceptSlide
          key={`aroma-prop-${proposalIndex}`}
          icon={prop.icon}
          badge={prop.badge}
          title={prop.title}
          description={prop.description}
          captureUrl={prop.captureUrl}
        />
      );
    }
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;

    // Trigger swipe transition only if horizontal movement dominates and is significant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div 
      className="relative w-full h-[100dvh] overflow-hidden bg-[#E60000] selection:bg-black selection:text-white font-sans"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Noise Texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Floating back to Menu and Campaign Indicator */}
      {currentSlide >= 4 && (
        <div className="absolute top-6 left-6 md:left-12 z-[90] flex items-center gap-4 select-none">
          <button
            onClick={() => {
              setCurrentSlide(3);
            }}
            className="flex items-center gap-2 py-2 px-4 bg-black/60 border border-white/20 hover:border-white/50 text-white text-xs font-semibold uppercase tracking-wider transition-all backdrop-blur-md rounded-none shadow-md group hover:bg-black cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al Menú</span>
          </button>
          <div className="px-3 py-2 bg-black text-[#E60000] border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-none shadow-md">
            Campaña: {selectedCampaign === 'cdmx' ? 'CDMX - Los Espacios' : 'Sintiendo la Ciudad de México'}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-between items-center px-4 md:px-12 z-50 pointer-events-none">
        <div className="flex gap-1 md:gap-2 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                if (i >= 4 && !selectedCampaign) setSelectedCampaign('cdmx');
                setCurrentSlide(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === i 
                  ? 'w-6 md:w-12 bg-white' 
                  : 'w-2 md:w-12 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2 md:gap-4 pointer-events-auto">
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white border border-white/10 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="p-2 md:p-3 rounded-full bg-white text-[#E60000] hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
