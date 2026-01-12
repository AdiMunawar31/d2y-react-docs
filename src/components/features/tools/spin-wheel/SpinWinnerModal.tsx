import { D2YModal } from "@/components/base/D2YModal";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface WinnerModalProps {
  open: boolean;
  winnerName: string;
  onClose: () => void;
}

export default function WinnerModal({
  open,
  winnerName,
  onClose,
}: WinnerModalProps) {
  const [showConfetti, setShowConfetti] = useState(true);
  const width = typeof window !== "undefined" ? window.innerWidth : 300;
  const height = typeof window !== "undefined" ? window.innerHeight : 300;

  useEffect(() => {
    if (!open) return;
    setShowConfetti(true);

    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {open && showConfetti && (
        <Confetti
          width={width || window.innerWidth}
          height={height || window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          gravity={0.35}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}

      <D2YModal
        open={open}
        onOpenChange={(v) => !v && onClose()}
        className="max-w-md p-8 text-center"
      >
        <h2 className="text-sm uppercase tracking-widest text-white/50 mb-2">
          🎉 Winner 🎉
        </h2>

        <div className="text-4xl font-black text-primary mb-6 drop-shadow-lg">
          {winnerName}
        </div>

        <button
          onClick={onClose}
          className="mt-4 px-6 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-all"
        >
          Close
        </button>
      </D2YModal>
    </>
  );
}
