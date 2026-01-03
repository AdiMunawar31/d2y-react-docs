import { motion } from "framer-motion";
import { Atom } from "lucide-react";
import React from "react";

interface LoadingStateProps {
  title?: string;
  description?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  title = "Initializing Environment",
  description = "Optimizing glass refraction shaders and loading component assets...",
}) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px]"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-8"
      >
        <div className="relative size-24">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/40"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute inset-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 10px rgba(43,140,238,0.2)",
                "0 0 30px rgba(43,140,238,0.5)",
                "0 0 10px rgba(43,140,238,0.2)",
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Atom className="text-primary" size={22} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-2"
        >
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
