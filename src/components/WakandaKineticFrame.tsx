import React from "react";
import profilePhoto from "/photo.png";

const WakandaKineticFrame = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Vibranium Energy Ring - Rotating */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full animate-spin-slow">
        {/* Outer Kinetic Energy Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 p-0.5 md:p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
      </div>

      {/* Middle Wakandan Tech Ring */}
      <div className="absolute inset-1 sm:inset-2 md:inset-3 lg:inset-4 rounded-full bg-gradient-to-br from-purple-600 via-gray-800 to-black border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30">
        {/* Inner Energy Core */}
        <div className="absolute inset-1 sm:inset-2 md:inset-3 rounded-full bg-gradient-to-r from-black via-purple-950/50 to-black border border-purple-300/20">
          {/* Photo Container */}
          <div className="absolute inset-1 sm:inset-2 md:inset-3 lg:inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-purple-400/30 shadow-inner">
            {/* Your Actual Photo */}
            <div className="w-full h-full rounded-full relative overflow-hidden group">
              <img
                src={profilePhoto}
                alt="Sanit Prakash - Full Stack Developer"
                className="w-full h-full object-cover object-center rounded-full transform transition-all duration-500 group-hover:scale-110 filter brightness-90 hover:brightness-100"
              />

              {/* Wakandan Tech Overlay Effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-900/30 via-transparent to-purple-500/10 opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-full shadow-inner shadow-purple-500/20"></div>
            </div>
          </div>

          {/* Kinetic Energy Rings - Multiple layers */}
          <div className="absolute inset-0 rounded-full">
            {/* Primary Energy Ring */}
            <div
              className="absolute inset-0 sm:inset-1 md:inset-2 rounded-full border border-purple-500/40 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>

            {/* Secondary Energy Ring */}
            <div
              className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 rounded-full border border-purple-300/30 animate-spin"
              style={{
                animationDuration: "12s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Inner Energy Ring */}
            <div
              className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 rounded-full border border-purple-400/35 animate-spin"
              style={{ animationDuration: "6s" }}
            ></div>

            {/* Micro Energy Ring */}
            <div
              className="absolute inset-6 sm:inset-8 md:inset-12 lg:inset-16 rounded-full border border-purple-600/25 animate-spin"
              style={{
                animationDuration: "4s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Wakandan Kinetic Energy Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-ping"
            style={{
              top: `${45 + Math.sin((i * Math.PI) / 6) * 38}%`,
              left: `${50 + Math.cos((i * Math.PI) / 6) * 42}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2.5s",
            }}
          ></div>
        ))}
      </div>

      {/* Outer Energy Pulses */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={`outer-${i}`}
            className="absolute w-2 h-2 bg-purple-300/60 rounded-full animate-ping"
            style={{
              top: `${50 + Math.sin((i * Math.PI) / 2) * 50}%`,
              left: `${50 + Math.cos((i * Math.PI) / 2) * 50}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: "3s",
            }}
          ></div>
        ))}
      </div>

      {/* Wakandan Corner Tech Accents - Enhanced */}
      <div className="absolute -top-1 sm:-top-2 md:-top-4 -left-1 sm:-left-2 md:-left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-l-2 border-t-2 border-purple-500 animate-pulse"></div>
      <div
        className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-r-2 border-t-2 border-purple-500 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute -bottom-1 sm:-bottom-2 md:-bottom-4 -left-1 sm:-left-2 md:-left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-l-2 border-b-2 border-purple-500 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute -bottom-1 sm:-bottom-2 md:-bottom-4 -right-1 sm:-right-2 md:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-r-2 border-b-2 border-purple-500 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Additional Corner Details */}
      <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-pulse"></div>
      <div
        className="absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-2 sm:left-4 md:left-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 right-2 sm:right-4 md:right-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Kinetic Energy Glow Effects - Multiple Layers */}
      <div className="absolute inset-0 rounded-full blur-2xl bg-purple-500/15 animate-pulse -z-10"></div>
      <div
        className="absolute inset-2 sm:inset-4 md:inset-6 rounded-full blur-xl bg-purple-400/20 animate-pulse -z-10"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full blur-lg bg-purple-300/10 animate-pulse -z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Additional Wakandan Tech Elements */}
      <div
        className="absolute inset-0 rounded-full border border-purple-500/10 animate-ping"
        style={{ animationDuration: "4s" }}
      ></div>
    </div>
  );
};

export default WakandaKineticFrame;
