import { NavLink } from "react-router-dom";
import { ROUTES } from "@/lib/constants/routes";
import { Compass, LayoutGrid } from "lucide-react";

export const NotFoundState = () => {
  return (
    <main className="flex-1 flex items-center justify-center relative z-10 p-4 md:p-8 min-h-screen">
      <div className="w-full max-w-4xl relative">
        {/* Glass Card */}
        <div className="relative overflow-hidden rounded-[3rem] border border-glass-border bg-glass-surface backdrop-blur-xl shadow-2xl p-8 md:p-20 text-center">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-6">
            {/* 404 */}
            <div className="relative">
              <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/90 to-white/10 select-none text-glow">
                404
              </h1>

              {/* Liquid accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full blur-2xl opacity-60 animate-pulse" />
            </div>

            {/* Message */}
            <div className="space-y-4 max-w-lg mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Oops! Lost in the glass.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                The component or page you are looking for seems to have
                evaporated into the ether. It might have been moved, renamed, or
                simply doesn't exist.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <NavLink
                to={ROUTES.HOME}
                className="flex h-12 min-w-45 items-center justify-center rounded-full bg-primary text-[#111a22] text-base font-bold transition-transform hover:scale-105 glow-button"
              >
                <Compass size={18} className="mr-2" />
                Go to Homepage
              </NavLink>

              <NavLink
                to={ROUTES.TOOLS}
                className="flex h-12 min-w-45 items-center justify-center rounded-full bg-card-hover hover:bg-[#2a3c4f] border border-glass-border text-white text-base font-medium transition-colors"
              >
                <LayoutGrid size={18} className="mr-2" />
                Browse Tools
              </NavLink>
            </div>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10" />
      </div>
    </main>
  );
};
