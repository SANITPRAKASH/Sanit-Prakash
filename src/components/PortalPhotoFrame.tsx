const PortalPhotoFrame = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Portal Ring - Animated */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full animate-spin-slow">
        {/* Outer Glowing Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-white to-red-500 p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
      </div>

      {/* Middle Portal Ring */}
      <div className="absolute inset-2 md:inset-3 lg:inset-4 rounded-full bg-gradient-to-br from-red-600 via-gray-800 to-black border-2 border-red-500/50 shadow-2xl shadow-red-500/20">
        {/* Inner Portal Ring */}
        <div className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-r from-black via-gray-900 to-black border border-white/20">
          {/* Photo Container */}
          <div className="absolute inset-2 md:inset-3 lg:inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-red-400/30 shadow-inner">
            {/* Placeholder for Photo */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
              {/* Photo placeholder - this is where your photo will go */}
              <div className="w-full h-full rounded-full bg-gradient-to-t from-red-900/20 to-transparent flex items-center justify-center">
                <div className="text-white/40 text-xs md:text-sm font-mono">
                  [Your Photo Here]
                </div>
              </div>

              {/* Subtle overlay effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-red-500/10 via-transparent to-white/5"></div>
            </div>
          </div>

          {/* Portal Energy Effects */}
          <div className="absolute inset-0 rounded-full">
            {/* Rotating Energy Rings */}
            <div
              className="absolute inset-1 md:inset-2 rounded-full border border-red-500/20 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute inset-3 md:inset-4 lg:inset-6 rounded-full border border-white/10 animate-spin"
              style={{
                animationDuration: "12s",
                animationDirection: "reverse",
              }}
            ></div>
            <div
              className="absolute inset-6 md:inset-8 lg:inset-10 rounded-full border border-red-400/15 animate-spin"
              style={{ animationDuration: "6s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Portal Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full animate-ping"
            style={{
              top: `${20 + Math.sin((i * Math.PI) / 3) * 30}%`,
              left: `${50 + Math.cos((i * Math.PI) / 3) * 35}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: "2s",
            }}
          ></div>
        ))}
      </div>

      {/* Corner Accents - Responsive */}
      <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-4 h-4 md:w-8 md:h-8 border-l-2 border-t-2 border-red-500"></div>
      <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 h-4 md:w-8 md:h-8 border-r-2 border-t-2 border-red-500"></div>
      <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-4 h-4 md:w-8 md:h-8 border-l-2 border-b-2 border-red-500"></div>
      <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-4 h-4 md:w-8 md:h-8 border-r-2 border-b-2 border-red-500"></div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full blur-xl bg-red-500/20 animate-pulse -z-10"></div>
    </div>
  );
};
export default PortalPhotoFrame;